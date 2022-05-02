import { useEffect, useState } from "react"

const useMountTransition = (isMounted: boolean, unmountDelay: number | undefined) => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null

    if (isMounted && !isTransitioning) {
      setIsTransitioning(true)
    } else if (!isMounted && isTransitioning) {
      timeoutId = setTimeout(() => setIsTransitioning(false), unmountDelay)
    }
    return () => {
      timeoutId && clearTimeout(timeoutId)
    }
  }, [unmountDelay, isMounted, isTransitioning])

  return isTransitioning
}

export default useMountTransition
