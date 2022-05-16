import { useState, useEffect } from 'react'

export default function Tile({tileSheet, tileSize, tileWidth, tileHeight}){
  const [tileX, setTileX] = useState(0);
  const [tileY, setTileY] = useState(0);

  const animate = (x, y) => {
    setTileX(x < tileWidth ? x : 0);
    setTileY(y < tileHeight ? y : 0);
  }
  useEffect(_ => {
    animate(tileX + 1, tileY + 1)
  }, [tileX, tileY])

  return <div className={"w-full h-full overflow-hidden " + tileSheet}
    style={{
      width: `${tileSize}px`,
      height: `${tileSize}px`,
      backgroundPosition: `-${tileX * tileSize}px -${tileY * tileSize}px`
    }}
  >
  </div>
}