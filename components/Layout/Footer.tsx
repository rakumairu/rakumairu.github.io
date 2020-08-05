const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        // min-height temporary
        <div className="relative w-full bg-main clip-top pt-12 md:pt-20 pb-4">
            <span className="arrow-up absolute top-0 transform -translate-x-1/2 mt-5 -ml-3 bounce" style={{ left: '50%' }} onClick={() => scrollTop()} />
            <div className="container">
                <div className="lg:mx-32">
                    <h3 className="font-bold text-3xl md:text-5xl mb-4 md:mb-8 text-white">Contact Me</h3>
                    <div className="flex flex-col text-white items-start mb-6">
                        <p className="md:text-lg leading-tight font-semibold">Demaspira Aulia</p>
                        <a href="https://goo.gl/maps/SwoEksDpGUpk9d2q7" className="md:text-lg leading-tight font-semibold">Jakarta, Indonesia</a>
                        <a href="mailto:rakumairu.dev@gmail.com" className="text-xl md:text-3xl leading-snug font-bold underline-link">rakumairu.dev@gmail.com</a>
                    </div>
                    <div className="flex items-center" style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)' }}>
                        <p className="mr-2 text-xs">Powered By:</p>
                        <img src="/static/icons/nextjs-logo.svg" alt="nextjs-logo" className="h-6 mr-2" />
                        <img src="/static/icons/tailwindcss-logo.svg" alt="tailwindcss-logo" className="h-6" />
                        <div className="hidden md:flex ml-auto items-center">
                            <a href="https://github.com/rakumairu">
                                <img src="/static/icons/github.svg" alt="linkedin" className="w-8 mr-4 transition-transform duration-150 ease-linear transform hover:-translate-y-1" />
                            </a>
                            <a href="https://www.linkedin.com/in/demaspira/">
                                <img src="/static/icons/linkedin.svg" alt="linkedin" className="w-8 transition-transform duration-150 ease-linear transform hover:-translate-y-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer