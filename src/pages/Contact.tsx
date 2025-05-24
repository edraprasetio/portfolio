import React, { useRef, useState } from 'react'
import { Background, Card, FormContainer, HeaderWrapper } from '../components/contact'
import lineBlack from '../assets/icons/line_black.svg'
import { H1, H2, H3, H4, H5, Header16, Header24, Header40 } from '../styles/typography'
import { SimpleLink } from '../components/atoms/link'
import { BlackButton, BlueButton } from '../components/atoms/button'
import styled from '@emotion/styled'
import CustomInput from '../components/atoms/input'
import { sendForm } from '@emailjs/browser'

const EmailLink = styled(SimpleLink)`
    color: ${(props) => props.theme.primaryColor.black[1]};

    &:hover {
        color: ${(props) => props.theme.primaryColor.blue[2]};
    }
`

export function Contact() {
    const form = useRef<HTMLFormElement>(null)
    const [showMessage, setShowMessage] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const validateForm = () => {
        let valid = true
        const newErrors = { name: '', email: '', message: '' }

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required'
            valid = false
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required'
            valid = false
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Invalid email format'
            valid = false
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required'
            valid = false
        }

        setErrors(newErrors)
        return valid
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (validateForm() && form.current) {
            console.log('Form Ref: ', form.current)
            sendForm('service_0epz1w4', 'template_1ctunrd', form.current, { publicKey: 'rul32lvZ8PxCEuQju' })
                .then(() => {
                    setShowMessage(true)
                    setFormData({ name: '', email: '', message: '' })
                    setErrors({})
                })
                .catch((error) => {
                    console.error('Failed...', error.text)
                })
        }
    }

    return (
        <section id='contact'>
            <Background>
                <Card>
                    <HeaderWrapper>
                        <Header24 style={{ color: '#1A73E8' }}>Contact Me</Header24>
                        <Header40 style={{ color: '#FFB74D' }}>Always Happy to Chat</Header40>
                    </HeaderWrapper>
                    <FormContainer ref={form} onSubmit={handleSubmit}>
                        <CustomInput
                            label='Name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            status={errors.name ? 'error' : ''}
                            message={errors.name}
                        />
                        <CustomInput
                            label='Email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            status={errors.email ? 'error' : ''}
                            message={errors.email}
                        />
                        <CustomInput
                            label='Message'
                            name='message'
                            as='textarea'
                            value={formData.message}
                            onChange={handleChange}
                            status={errors.message ? 'error' : ''}
                            message={errors.message}
                            style={{ resize: 'vertical', overflow: 'auto' }}
                        />
                        <BlueButton type='submit' style={{ marginTop: '8px' }}>
                            <Header16>Send Message</Header16>
                        </BlueButton>
                        {showMessage && <Header16 style={{ color: '#1A73E8' }}>Message Sent!</Header16>}
                    </FormContainer>
                </Card>
            </Background>
        </section>
    )
}
