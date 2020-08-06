import { useRef, useEffect, useState } from "react"

import classes from '../styles//modules/LazyLoad.module.css'

interface IProps {
    children: React.ReactNode
    /** Options for the IntersectionObserver */
    options?: IntersectionObserverInit
    /** Direction the element comes from, right is having trouble with overflow on mobile */
    direction?: 'top' | 'bottom' | 'left'
}

const LazyLoad = ({ children, options, direction }: IProps) => {
    const ref = useRef<HTMLSpanElement>(null)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        const io = new IntersectionObserver(callback, options || {})

        if (ref.current) io.observe(ref.current)

        return () => {
            io.unobserve(ref.current)
        }
    }, [])

    const callback = ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting && !isVisible) setVisible(true)
    }

    return (
        <span ref={ref} className={`${classes['lazy-load']} ${classes[direction || '']} ${isVisible ? classes.show : classes.hide}`}>
            { children }
        </span>
    )
}

export default LazyLoad