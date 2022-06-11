import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { changeDialog } from "../../Redux/dialogBoxSlice";
import { changeModal } from "../../Redux/modalSlice";
import "./style.css";
export default function Modal({
  modal: { showModal, choices, modalConfig },
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
              {choices.map(({ choiceText, choiceGoTo }) => (
                <a href={choiceGoTo}>
                  <button
                    className="toggle-button"
                    onClick={() => {
                      dispatch(changeDialog(0));
                      dispatch(
                        changeModal({
                          choices: [],
                          modalConfig:{},
                          showModal: false,
                        })
                      );
                    }}
                  >
                    {choiceText}
                  </button>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
