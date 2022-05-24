import AnimalSprite from "./animal";

export default function BunnyBabySprite({
  animation=0,
  animated = false,
}){
  return <AnimalSprite 
    animation={animation} 
    animated={animated} 
    filename='bunny_baby_animation.png' 
  />
}