import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDialog } from "../../Redux/dialogBoxSlice";
import { changeModal } from "../../Redux/modalSlice";
import { changeId } from "../../Redux/phaserSlice";
import "./style.css";
export default function Modal({
  modal: { title, text, showModal, choices, buttonText, goTo },
}) {
  const dispatch = useDispatch();

  const MarinGame = () => (
    <a href={goTo}>
      <button
        className="toggle-button"
        onClick={() => {
          dispatch(changeDialog(0));
          dispatch(
            changeModal({
              title: "",
              image: "",
              text: "",
              buttonText: "",
              showModal: false,
              goTo: 0,
            })
          );
        }}
      >
        {buttonText}
      </button>
    </a>
  );

  const TommyGame = () => (
    <>
      {choices.map(({ choiceText, choiceGoTo }) => (
        <a href={choiceGoTo}>
          <button
            className="toggle-button"
            onClick={() => {
              dispatch(changeDialog(0));
              dispatch(
                changeModal({
                  title: "",
                  image: "",
                  text: "",
                  buttonText: "",
                  showModal: false,
                  goTo: 0,
                })
              );
            }}
          >
            {choiceText}
          </button>
        </a>
      ))}
    </>
  );

  return (
    <Fragment>
      {showModal && (
        <div className="container">
          <div className="modal" id="modal">
            <h2>{title}</h2>
            <div className="content">{text}</div>
            <div className="actions">
              {goTo === "no" ? TommyGame() : MarinGame()}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
