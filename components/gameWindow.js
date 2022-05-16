import Tile from "./tile"

export default function GameWindow(){
  return <div className="bg-blue-100 w-[80vmin] h-[80vmin] grid grid-cols-10 grid-rows-10">
      <Tile tileSheet='turkey_animation' tileHeight={5} tileWidth={4} tileSize={17}/>
  </div>
}