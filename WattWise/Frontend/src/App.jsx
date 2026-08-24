import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import './App.css'

function App() {
  const mainBoxRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial light-on sequence
      const tl = gsap.timeline()

      // Purple glow - realistic light on effect
      tl.from('.purpleGlow', {
        opacity: 0,
        scale: 0.3,
        filter: 'blur(150px)',
        x: -100,
        y: -100,
        duration: 2.2,
        ease: 'power4.out'
      }, 0)
      
      // Blue glow - follows purple with staggered timing
      .from('.blueGlow', {
        opacity: 0,
        scale: 0.3,
        filter: 'blur(150px)',
        x: 100,
        y: -100,
        duration: 2,
        ease: 'power4.out'
      }, 0.3)
      
      // Cyan glow - completes the lighting setup
      .from('.cyanGlow', {
        opacity: 0,
        scale: 0.3,
        filter: 'blur(150px)',
        y: 100,
        duration: 2.3,
        ease: 'power4.out'
      }, 0.5)

      // After lights are on, add subtle floating and pulsing animations
      gsap.to('.purpleGlow', {
        y: '-=20',
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.5
      })

      gsap.to('.blueGlow', {
        x: '+=15',
        duration: 4.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.7
      })

      gsap.to('.cyanGlow', {
        y: '+=20',
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.9
      })

      // Subtle brightness pulsing - light intensity fluctuation
      gsap.to('.purpleGlow', {
        opacity: 0.5,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.5
      })

      gsap.to('.blueGlow', {
        opacity: 0.48,
        duration: 3.2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.7
      })

      gsap.to('.cyanGlow', {
        opacity: 0.35,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 2.9
      })

    }, mainBoxRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={mainBoxRef} className="mainBox">

      <div className="bgGlow purpleGlow"></div>
      <div className="bgGlow blueGlow"></div>
      <div className="bgGlow cyanGlow"></div>

    </div>
  )
}

export default App