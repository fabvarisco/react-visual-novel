import { useEffect, useRef } from "react";
import styles from "../styles/Home.module.css";
export default function Home() {
  const ref = useRef();

  useEffect(() => {
    loadImage();
  }, []);

  function loadImage() {
    const ctx = ref.current.getContext("2d");
    const image = new window.Image();
    image.src = `/startgame/startscreen.png`;

    image.onload = () => {
      ctx.drawImage(image, 0, 0);

    };
  }

  return (
    <div className={"container"}>
      <canvas
        className={"canvas"}
        ref={ref}
        id="canvasGame"
        width="121"
        height="80"
      ></canvas>
      <div className={styles.startButton}>
        <a href={`/Game/0`}>
          <button>Start Game</button>
        </a>
      </div>
    </div>
  );
}
