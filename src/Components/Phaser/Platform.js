import React, { useState, useRef } from "react";
import { ArcadeImage, useGameLoop } from "react-phaser-fiber";

export default function MovingPlatform({ moving, ...props }) {
  const ref = useRef(null);
  const [velocity, setVelocity] = useState(
    moving
      ? {
          x: 50,
          y: 0,
        }
      : {
          x: 0,
          y: 0,
        }
  );

  useGameLoop(() => {
    if (ref.current) {
      if (ref.current.x <= 300) {
        setVelocity({
          x: 50,
          y: 0,
        });
      } else if (ref.current.x >= 500) {
        setVelocity({
          x: -50,
          y: 0,
        });
      }
    }
  });

  return (
    <ArcadeImage
      {...props}
      ref={ref}
      name="platform"
      texture="ground"
      immovable
      allowGravity={false}
      velocity={velocity}
    />
  );
}
