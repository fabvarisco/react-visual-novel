import { useEffect, useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import GameConfig from "./game.json";
import styles from "../../styles/game.module.css";
import Image from "next/image";

export async function getServerSideProps(context) {
  const data = GameConfig.novel[context.params.id];
  return {
    props: {
      data: data,
    },
  };
}

function Game({ data }) {
  const [dialog, setDialog] = useState(0);
  const [showChoices, setShowChoices] = useState(false);
  const [background, setBackground] = useState(0);
  const ref = useRef();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (data?.dialogs[dialog]?.nextBackground) {
      setBackground(background + 1);
    }
  }, [dialog]);

  useEffect(() => {
    loadImage();
  }, [background, id]);

  function loadImage() {
    const ctx = ref.current.getContext("2d");
    const image = new window.Image();
    image.src = `/images/${data.background[background]}.png`;

    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
  }

  function nextDialog() {
    const size = data.dialogs.length - 1;
    if (size === dialog) {
      setShowChoices(true);
      return;
    }
    setDialog(dialog + 1);
  }

  function backDialog() {
    if (0 === dialog) return;
    setDialog(dialog - 1);
  }

  function resetTypeAnimation() {
    var e = document.getElementById("typingAnimation");
    e.getAnimations().forEach((anim) => {
      anim.cancel();

      anim.play();
    });
  }

  function renderButtons() {
    return (
      <div className={styles.buttonContainer}>
        {!showChoices && (
          <Fragment>
            <div>
              {dialog > 0 && <button onClick={() => backDialog()}>Back</button>}
            </div>
            <div>
              <button onClick={() => nextDialog()}>Next</button>
            </div>
          </Fragment>
        )}
      </div>
    );
  }

  return (
    <div className={"container"}>
      <canvas
        className={"canvas"}
        ref={ref}
        id="canvasGame"
        width="75"
        height="61"
      ></canvas>

      <div className={styles.card}>
        {showChoices && (
          <div>
            <div>
              <p>
                <b>Escolhas</b>
              </p>
            </div>
            {data.choices?.choiceDialog?.map(({ choiceText, choiceGoTo }) => (
              <div key={choiceGoTo}>
                <a href={`/Game/${choiceGoTo}`}>{choiceText}</a>
              </div>
            ))}
          </div>
        )}
        {!showChoices && (
          <div>
            <p>
              <Image
                width={80}
                height={80}
                alt={data.dialogs[dialog]?.characterName}
                src={data.dialogs[dialog]?.characterImage}
                style={{ imageRendering: "pixelated" }}
              />
              <b>{data.dialogs[dialog]?.characterName}</b>
            </p>
            <p id="typingAnimation">{data.dialogs[dialog]?.characterDialog}</p>
          </div>
        )}

        {renderButtons()}
      </div>
    </div>
  );
}
export default Game;
