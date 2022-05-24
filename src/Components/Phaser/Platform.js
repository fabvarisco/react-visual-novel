import React, { useState, useRef } from "react";
import { ArcadeImage, useGameLoop } from "react-phaser-fiber";

export default function MovingPlatform({ moving, ...props }) {
  const ref = useRef(null);

  useGameLoop(() => {
    if (ref.current) {
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
      visible={false}
    />
  );
}
