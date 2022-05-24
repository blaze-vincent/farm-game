import Sprite from "./sprite"
import animalsObj from './animalSpritesData'

export default function AnimalSprite({
  animal,
  filename,
  animated = false,
  animation = 0,
}){
  return <div
    className="w-8 min-w-8 h-8 min-h-8 relative overflow-hidden"
  >
    <Sprite
      spritesheetURL={'/sprites/animals/' + animalsObj[animal].filename ||  filename} 
      spritesheetDimensionsTiles={{w: 4, h: 5}}
      animation={animation}
      animated={animated}
    />
  </div>
}