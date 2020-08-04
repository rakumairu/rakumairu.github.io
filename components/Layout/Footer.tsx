const Footer = () => {
    return (
        // min-height temporary
        <div className="w-full bg-main clip-top pt-20 pb-4">
            <div className="container">
                <div className="mx-32">
                    <h3 className="font-bold text-5xl mb-8 text-white">Contact Me</h3>
                    <div className="flex flex-col text-white items-start mb-6">
                        <p className="text-lg leading-tight font-semibold">Demaspira Aulia</p>
                        <a href="https://goo.gl/maps/SwoEksDpGUpk9d2q7" className="underline-link text-lg leading-tight font-semibold">Jakarta, Indonesia</a>
                        <a href="mailto:rakumairu.dev@gmail.com" className="text-3xl leading-snug font-bold underline-link">rakumairu.dev@gmail.com</a>
                    </div>
                    <div className="flex items-center" style={{ filter: 'brightness(0) saturate(100%) invert(100%) sepia(3%) saturate(12%) hue-rotate(103deg) brightness(105%) contrast(105%)' }}>
                        <p className="mr-2">Powered By:</p>
                        <img src="/static/icons/nextjs-logo.svg" alt="nextjs-logo" className="h-8 mr-2" />
                        <img src="/static/icons/tailwindcss-logo.svg" alt="tailwindcss-logo" className="h-8" />
                        <div className="flex ml-auto items-center">
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