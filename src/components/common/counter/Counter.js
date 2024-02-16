import { useMemo, useState, useEffect, useRef } from "react"

export const Counter = (props) => {
    const [count, setCount] = useState(props.from)
    const [inView, setInView] = useState(null)
    const counterRef = useRef([])
    
    const callback = (entries) => {
        setInView(entries[0].isIntersecting)
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, { threshold: 0.1 })

        // observing each reference element
        if(counterRef.current) observer.observe(counterRef.current)
    
        // unmounting observer
        return () => observer.disconnect()
    })

    const getChangeValue = useMemo(() => {
        return (props.to-props.from)/20
    }, [props.from, props.to])

    const getSpeed = useMemo(() => {
        return Math.abs(1000/((props.to-props.from)/getChangeValue))
    }, [props.from, props.to, getChangeValue])

    // Set timeout here will work as set interval as a new instance is getting created with every componentDidUpdate because the count state changes
    useEffect(() => {
        if(inView) {
            setTimeout(() => {
                if((props.direction === 'up' && count < props.to) || (props.direction === 'down' && count > props.to)) {
                    setCount(count + getChangeValue)
                }
            }, getSpeed)
        } else {
            // if the component goes out of view reset counter
            setCount(props.from)
        }
    })
    return (
        <span ref={counterRef}>{Math.ceil(count)}</span>
    )
}

Counter.defaultProps = {
    direction: 'up',
    from: 0,
    to: 0,
}