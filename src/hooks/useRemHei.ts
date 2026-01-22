
import { useState, useEffect } from "react"

export const useRemHei = (ele: React.RefObject<HTMLElement> | null, pad: number = 0) => {
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (!ele) return

        const calcHei = () => {
            const winHei = window.innerHeight
            const eleTop = ele?.current?.getBoundingClientRect()?.top
            const remHei = winHei - eleTop - pad
            setHeight(remHei)
        }
        calcHei()

        window.addEventListener('resize', calcHei)
        return window.removeEventListener('resize', calcHei)
    }, [ele, pad])

    return height

}