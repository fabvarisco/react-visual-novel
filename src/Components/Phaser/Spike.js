import Phaser from "phaser";
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArcadeCollider, ArcadeSprite, useScene } from "react-phaser-fiber";

function Spike(props) {
  const scene = useScene("main");

  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);


  useEffect(() => {
    if (destroyed === true) {
      //dispatch
    }
  }, [destroyed,scene]);

  return (
    <ArcadeSprite
      x={props.x}
      y={props.y}
      ref={ref}
      name="enemy"
      texture="spike"
    >
      <ArcadeCollider with="platform" />
      <ArcadeCollider
        with="player"
        overlapOnly
        onCollide={() => {
          setDestroyed(true);
        }}
      />
    </ArcadeSprite>
  );
}
export default Spike;
