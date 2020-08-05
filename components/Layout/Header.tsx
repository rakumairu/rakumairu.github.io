const Header = () => {
    // const handleScroll = () => {
    //     setScrolled(document.documentElement.scrollTop > 0 && !isScrolled)
    // }

    // const handleScrollThrottled = useCallback(_.throttle(handleScroll, 500), [])
    
    return (
        <>
            <div className="absolute top-0 w-full z-20 text-white h-16">
                <div className="flex relative items-center container h-full">
                    <a href={process.env.NEXT_PUBLIC_URL}>
                        Rakumairu DEV
                    </a>
                    <div className="ml-auto flex items-center h-full">
                        <a href="#" className="flex items-center font-semibold underline-link">BLOG</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header