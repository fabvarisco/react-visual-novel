import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeDialog } from "../../Redux/dialogBoxSlice";
import { changeModal } from "../../Redux/modalSlice";
import { changeId } from "../../Redux/phaserSlice";
import "./style.css";
export default function Modal({
  modal: { title, text, buttonText, goTo, showModal },
}) {
  const dispatch = useDispatch();
  return (
    <Fragment>
      {showModal && (
        <div className="container">
          <div className="modal" id="modal">
            <h2>{title}</h2>
            <div className="content">{text}</div>
            <div className="actions">
              <button
                className="toggle-button"
                onClick={() => {
                  dispatch(changeId(goTo));
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
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
