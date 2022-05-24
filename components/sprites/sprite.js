import { useState, useEffect, useRef } from 'react'

export default function Sprite({
  //position parent relatively with overflow hidden
  spritesheetURL,
  spritesheetDimensionsTiles,
  initialAnimationFrame = {x: 0, y: 0},
  animated = false,
  animation = 0,
  framerate = 4,
}){
  const [animationFrame, setAnimationFrame] = useState(initialAnimationFrame); //tile coordinates to render
  const [framesRendered, setFramesRendered] = useState(0);
  const lastFrameTime = useRef(Date.now())

  //animate
  useEffect(_ => {
    if(animated){
      window.requestAnimationFrame(_ => {
        const now = Date.now()
        if(now - lastFrameTime.current > ( 1000/framerate )){
          setAnimationFrame({
            x: (animationFrame.x + 1) % spritesheetDimensionsTiles.w,
            y: animation
          })
          lastFrameTime.current = now;
        }
        setFramesRendered(framesRendered + 1)
      })
    }
  }, [framesRendered, animated])

  //change animation
  useState(_ => {
    setAnimationFrame({x: 0, y: animation})
  }, [animation])

  return <img 
    src={spritesheetURL}
    className={'absolute block'}
    style={{
      width: `${100 * spritesheetDimensionsTiles.w}%`,
      maxWidth: `${100 * spritesheetDimensionsTiles.w}%`,
      height: `${100 * spritesheetDimensionsTiles.h}%`,
      left: `${-100 * animationFrame.x}%`,
      top: `${-100 * animationFrame.y}%`
    }}  
  />
}