import { useState } from "react";
import { useGameLoop, useSpawner  } from "react-phaser-fiber";


export default function SpawnController({gameObject, timer}) {

  const { spawn } = useSpawner();
  const [lastSpawnTime, setLastSpawnTime] = useState(0);
  var time_til_spawn = Math.random() * timer;

  useGameLoop(({ time }) => {
    var current_time = time;
    if (current_time - lastSpawnTime > time_til_spawn) {
      time_til_spawn = Math.random() * timer;
      setLastSpawnTime(current_time);
      spawn(gameObject, 
        {
        x: Math.random() * (380 - 1) + 1,
        y: 0,
      });
    }
  });

  return null;
}
