import React, { useContext } from "react";
import "./InputModal.css";
import { HomeContext } from "../contexts/user.context";
import { inputFormConstants } from "../constants";

const InputModal = ({ setShowModal }) => {
  const {
    userInputs: { title, description, phone },
    inputChangeHandler,
    saveFormInfo,
  } = useContext(HomeContext);

  const saveUserData = () => {
    saveFormInfo()
    setShowModal(false)
  }

  return (
    <div className="mainModal">
      <div class="modal-container" id="myModal">
        <div class="modal-wrapper">
          <div class="modal">
            <header>
              <h2 className="text-3xl font-semibold">Enter Your Input</h2>
            </header>
            <main>
              <div className="flex items-center mb-4 w-[500px] justify-between">
                <p className="mr-2 text-lg">Enter Your Title </p>
                <input
                  type="text"
                  className="border-2 border-solid rounded-sm p-2 "
                  value={title}
                  name={inputFormConstants.TITLE}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="flex items-center mb-4 w-[500px] justify-between">
                <p className="mr-2 text-lg">Enter Your description</p>
                <input
                  type="text"
                  className="border-2 border-solid rounded-sm p-2 "
                  value={description}
                  name={inputFormConstants.DESCRIPTION}
                  onChange={inputChangeHandler}
                />
              </div>
              <div className="flex items-center mb-4 w-[500px] justify-between">
                <p className="mr-2 text-lg">Enter Your Phone Number</p>
                <input
                  type="text"
                  className="border-2 border-solid rounded-sm p-2 "
                  value={phone}
                  name={inputFormConstants.PHONE}
                  onChange={inputChangeHandler}
                />
              </div>
            </main>
            <footer>
              <div className0="btn-container">
                <button
                  onClick={() => setShowModal(false)}
                  className="w-[140px] h-[43px] border border-solid mr-3 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={() => saveUserData()}
                  className="saveBtn text-white w-[140px] h-[43px] rounded-lg"
                >
                  Save
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputModal;
