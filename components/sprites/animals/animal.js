import Sprite from "../sprite"

export default function AnimalSprite({
  filename,
  animated = false,
  animation = 0,
}){
  return <div
    className="w-8 min-w-8 h-8 min-h-8 relative overflow-hidden"
  >
    <Sprite
      spritesheetURL={'/sprites/animals/' + filename} 
      spritesheetDimensionsTiles={{w: 4, h: 5}}
      animation={animation}
      animated={animated}
    />
  </div>
}