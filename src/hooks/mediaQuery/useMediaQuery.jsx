import { useState, useEffect } from 'react'

const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        // media.matches gives out a boolean value as response to whether the current window viewport matches the media  viewport or not
        if (media.matches !== matches) {
            setMatches(media.matches)
        }

        const listener = () => setMatches(media.matches)
        window.addEventListener('resize', listener)
        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [matches, query])

    return matches
}

export default useMediaQuery
