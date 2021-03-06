import AnimalSprite from "./sprites/animal";
import Controller from "./sprites/controller";

export default function GameWindow(){
  return <div 
    className="bg-blue-100 h-80 w-80 grid grid-cols-10 grid-rows-10 overflow-hidden"
  >
    <AnimalSprite animal='pig' animated={true} />
    <Controller />
    <div>
    </div>
  </div>
}