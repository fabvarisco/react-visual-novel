import React, { useMemo, useState, useRef } from "react";
import {
  ArcadeSprite,
  ArcadeCollider,
  useScene,
  useGameEvent,
  useGameLoop,
} from "react-phaser-fiber";

export default function Player(props, ref) {
  const scene = useScene();
  const playerRef = useRef(null);

  const keys = useMemo(
    () => ({
      left: scene.input.keyboard.addKey("left"),
      right: scene.input.keyboard.addKey("right"),
      up: scene.input.keyboard.addKey("up"),
    }),
    [scene.input.keyboard]
  );

  const [x, setX] = useState(props.x);
  const [y, setY] = useState(props.y);
  const [velocityX, setVelocityX] = useState(0);
  const [velocityY, setVelocityY] = useState(0);
  const [animation, setAnimation] = useState("turn");
  const [destroyed, setDestroyed] = useState(false);

  const animations = useMemo(
    () => [
      {
        key: "left",
        frames: scene.anims.generateFrameNumbers("jarvis", {
          start: 0,
          end: 3,
        }),
        frameRate: 10,
        repeat: -1,
      },
      {
        key: "turn",
        frames: [{ key: "jarvis", frame: 4 }],
        frameRate: 20,
      },
      {
        key: "right",
        frames: scene.anims.generateFrameNumbers("jarvis", {
          start: 5,
          end: 8,
        }),
        frameRate: 10,
        repeat: -1,
      },
    ],
    [scene.anims]
  );

  // keep our velocityX state in sync with the current velocityX of the instance
  useGameEvent("prestep", () => {
    if (destroyed) return null;
    if (playerRef.current?.body) {
      setVelocityX(playerRef.current.body.velocity.x);
      setVelocityY(playerRef.current.body.velocity.y);
    }
  });

  useGameLoop(() => {
    if (destroyed) return null;
    // horizontal movement
    if (keys.left.isDown) {
      setVelocityX(-160);
      setAnimation("left");
    } else if (keys.right.isDown) {
      setVelocityX(160);
      setAnimation("right");
    } else {
      setVelocityX(0);
      setAnimation("turn");
    }

    // jump if on ground
    if (keys.up.isDown && playerRef.current?.body.touching.down) {
      setVelocityY(-330);
    }
  });

  if (destroyed) {
    return null;
  }

  return (
    <ArcadeSprite
      {...props}
      ref={playerRef}
      name="player"
      animations={animations}
      animation={animation}
      texture="jarvis"
      collideWorldBounds
      velocityX={velocityX}
      velocityY={velocityY}
      x={x}
      y={y}
    >
      <ArcadeCollider with="platform" />
    </ArcadeSprite>
  );
}
