import React, { useRef, useState } from "react";
import { ArcadeImage, useGameLoop } from "react-phaser-fiber";

function Spike(props) {
  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);
  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);

  useGameLoop(() => {

  });

  if (destroyed) {
    return null;
  }

  return (
    <ArcadeImage
      x={x}
      y={y}
      ref={ref}
      name="enemy"
      texture="spike"
    />
  );
}
export default Spike;
