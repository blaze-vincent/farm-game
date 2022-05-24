import AnimalSprite from "./animal";

export default function BunnySprite({
  animation=0,
  animated = false,
}){
  return <AnimalSprite 
    animation={animation} 
    animated={animated} 
    filename='bunny_animations.png' 
  />
}