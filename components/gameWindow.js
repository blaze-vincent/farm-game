import BunnySprite from "./sprites/animals/bunny"
import BunnyBabySprite from "./sprites/animals/bunnyBaby"
import {useState} from 'react'

export default function GameWindow(){

  const [animalAnimations, setAnimalAnimations] = useState(0);

  return <div 
    className="bg-blue-100 h-80 w-80 grid grid-cols-10 grid-rows-10"
    onClick={_ => {setAnimalAnimations(animalAnimations++ % 5)}}  
  >
    <BunnySprite animated={true} animation={animalAnimations}/>
    <BunnyBabySprite animated={true} animation={animalAnimations}/>
    
  </div>
}