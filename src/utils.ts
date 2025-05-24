export const scrollToSection = (id: string) => {
    const OFFSET = 80

    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        const section = document.getElementById(id)
        if (section) {
            const y = section.getBoundingClientRect().top + window.scrollY - OFFSET
            window.scrollTo({ top: y, behavior: 'smooth' })
        }
    }
}
