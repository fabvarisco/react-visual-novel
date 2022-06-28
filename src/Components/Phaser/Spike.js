import Phaser from "phaser";
import React, { useMemo, useRef, useState } from "react";
import {
  ArcadeCollider,
  ArcadeSprite,
  useScene,
  useGame,
  useGameLoop,
} from "react-phaser-fiber";

function Spike(props) {
  const { scene } = useScene("main");
  const game = useGame();
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);
  const bounceY = useMemo(() => Phaser.Math.FloatBetween(0.4, 0.8), []);
  const bounceX = useMemo(() => Phaser.Math.FloatBetween(0.1, 0.3), []);
  if (destroyed === true) {
    //dispatch
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useGameLoop(() => {
    // horizontal movement
    //console.log(ref.current.name);
  });

  return (
    <ArcadeSprite
      x={x}
      y={y}
      ref={ref}
      name="spike"
      texture="spike"
      bounceY={bounceY}
      bounceX={bounceX}
    >


      <ArcadeCollider
        with="player"
        onCollide={(event, other) => {
          console.log(other);
          other.visible = false;
          other.disableBody();
          //console.log(event);
        }}
      />
    </ArcadeSprite>
  );
}
export default Spike;
