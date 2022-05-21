import React, { useEffect } from "react";
import { Game, Scene, Text } from "react-phaser-fiber";
import { Group, Image } from "react-phaser-fiber";
import Platform from "./Platform";
import Player from "./Player";
import Star from "./Star";
import Phaser from "phaser";
import { selectPhaser } from "../../Redux/phaserSlice";
import { useSelector } from "react-redux";
export default function PhaserComponent() {
  const { colision } = useSelector(selectPhaser);

  useEffect(() => {
    console.log(colision);
  }, [colision]);

  return (
    <Game
      width={800}
      height={600}
      physics={{
        default: "arcade",
        arcade: {
          gravity: {
            y: 300,
          },
          // debug: true,
        },
      }}
      scale={{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      }}
    >
      <Scene
        sceneKey="main"
        onPreload={(scene) => {
          scene.load.image("sky", "sky.png");
          scene.load.image("ground", "platform.png");
          scene.load.image("star", "star.png");
          scene.load.spritesheet("dude", "dude.png", {
            frameWidth: 32,
            frameHeight: 48,
          });
        }}
        renderLoading={(progress) => (
          <Text
            x={300}
            y={300}
            text={`Loading... (${progress * 100}%)`}
            style={{ color: "white" }}
          />
        )}
      >
        <Image x={400} y={300} texture="sky" />
        <Player x={100} y={450} />
        <Group name="platforms">
          <Platform x={400} y={568} scale={2} physicsType="static" />
          <Platform moving x={400} y={400} />
        </Group>
        <Group name="stars">
          {colision && (
            <>
              {Array.from({ length: 11 }).map((_, index) => (
                <Star key={index} x={12 + index * 70} y={200} />
              ))}
            </>
          )}
        </Group>
      </Scene>
    </Game>
  );
}
