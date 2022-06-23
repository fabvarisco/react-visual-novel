import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { changeDialog } from "../../Redux/dialogBoxSlice";
import { changeContinueFrom } from "../../Redux/gameSlice";
import { changeModal } from "../../Redux/modalSlice";
import "./style.css";
export default function Modal({
  modal: { showModal, choices, modalConfig, continueFrom },
}) {
  const dispatch = useDispatch();

  return (
    <Fragment>
      {showModal && (
        <div className="container">
          <div className="modal" id="modal">
            <h2>{modalConfig?.modalTitle}</h2>
            <div className="content">{modalConfig?.modalText}</div>
            <div className="actions">
              {choices.map(({ choiceText, choiceGoTo }) => {
                debugger
                return (
                  <Link
                    to={choiceGoTo}
                    key={choiceText}
                    onClick={() => {
                      dispatch(changeContinueFrom(continueFrom));
                      dispatch(changeDialog(0));
                      dispatch(
                        changeModal({
                          choices: [],
                          modalConfig: {},
                          showModal: false,
                        })
                      );
                    }}
                  >
                    <button className="toggle-button">{choiceText}</button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
