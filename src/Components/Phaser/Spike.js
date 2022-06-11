import React, { useEffect, useRef, useState } from "react";
import {
  ArcadeCollider,
  ArcadeSprite,
  useScene,
  useGame,
  Group,
} from "react-phaser-fiber";

function Spike(props) {
  const { scene } = useScene("main");
  const game = useGame();
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);


  if (destroyed === true) {
    //dispatch
    return null;
  }

  return (
      <ArcadeSprite x={x} y={y} ref={ref} name="spike" texture="spike">
        <ArcadeCollider with="platform" />
        <ArcadeCollider
          with="player"
          overlapOnly
          onCollide={() => {
            setDestroyed(true)
          }}
        />
      </ArcadeSprite>
  );
}
export default Spike;
