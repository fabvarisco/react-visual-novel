import Phaser from "phaser";
import React, { useMemo, useRef, useState } from "react";
import {
  ArcadeCollider,
  ArcadeSprite,
  useScene,
  useGame,
} from "react-phaser-fiber";

function Spike(props) {
  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);
  const bounceY = useMemo(() => Phaser.Math.FloatBetween(0.4, 0.8), []);
  const bounceX = useMemo(() => Phaser.Math.FloatBetween(0.1, 0.3), []);
 
  if (destroyed === true) {
    //dispatch
    return null;
  }

  return (
    <ArcadeSprite
      x={props.x}
      y={props.x}
      ref={ref}
      name="spike"
      texture="spike"
      bounceY={bounceY}
      bounceX={bounceX}
    >
      <ArcadeCollider
        with="player"
        onCollide={(event, other) => {
          other.visible = false;
          other.disableBody();
        }}
      />
    </ArcadeSprite>
  );
}
export default Spike;
