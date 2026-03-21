import { useEffect } from "react"

function useFaviconAnimation() {
  useEffect(() => {
    let angle = 0
    const favicon = document.getElementById("favicon")

    if (!favicon) return

    let animationFrame

    const animate = () => {
      angle += 2 
        

      const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g transform="rotate(${angle} 12 12)">
            <circle cx="12" cy="12" r="10" stroke="#ff2d78" stroke-width="2" fill="none"/>
            <path d="M12 6v6l4 2" stroke="#ff2d78" stroke-width="2" fill="none"/>
          </g>
        </svg>
      `

      const url = "data:image/svg+xml;base64," + btoa(svg)
      if (angle % 2 === 0) {
  favicon.href = url
}

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrame)
  }, [])
  
}

export default useFaviconAnimation