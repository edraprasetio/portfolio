export const scrollToSection = (id: string) => {
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
    }
}
