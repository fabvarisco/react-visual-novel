import React, { useEffect, useState } from "react";
import { useGameLoop, useSpawner, Game } from "react-phaser-fiber";
import Spike from "./Spike";

export default function SpikeSpawner(props) {
  const { spawn } = useSpawner();
  const [lastSpawnTime, setLastSpawnTime] = useState(0);
  var time_til_spawn = Math.random() * 3000 + 2000; //Random time between 2 and 5 seconds.

  useGameLoop(({ time }) => {
    var current_time = time;
    if (current_time - lastSpawnTime > time_til_spawn) {
      time_til_spawn = Math.random() * 3000 + 2000;
      setLastSpawnTime(current_time);
      spawn(Spike, { x: Math.random() * (380 - 1) + 1, y: 0 });
    }
  });

  return null;
}
