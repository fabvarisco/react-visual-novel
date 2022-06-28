import React, { useMemo, useRef, useState } from "react";
import { ArcadeImage, ArcadeCollider } from "react-phaser-fiber";
import Phaser from "phaser";

export default function Star(props) {
  const ref = useRef(null);
  const [destroyed, setDestroyed] = useState(false);
  
  const bounceY = useMemo(() => Phaser.Math.FloatBetween(0.4, 0.8), []);

  if (destroyed) {
    return null;
  }

  return (
    <ArcadeImage
      {...props}
      ref={ref}
      name="star"
      texture="star"
      bounceY={bounceY}
    >
      <ArcadeCollider with="platform" />
      <ArcadeCollider
        with="player"
        overlapOnly
        onCollide={() => {
          setDestroyed(true);
        }}
      />
    </ArcadeImage>
  );
}
