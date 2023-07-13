import React, { memo, useState, useContext } from "react";
import Template from "../../Templates";
import InputModal from "../../Modals/InputModal";
import { HomeContext } from "../../contexts/user.context";
import { templateKeys } from "../../constants";

import { useNavigate } from "react-router-dom";
import defaultUser from "../admin/userDefault";

const MainView = () => {
  const [showModal, setShowModal] = useState(false);

  const {
    updateTemplateKey,
    uploadImage,
    printRef,
    handleDownloadPdf,
    handleImageScrollPosition,
  } = useContext(HomeContext);

  const navigate = useNavigate();
  // const defaultUser = JSON.parse(localStorage.getItem('user'))
  const handleLogoutUser = () => {
    localStorage.removeItem("user");
  };

  if (defaultUser === null) {
    navigate("/");
  }

  return (
    <>
      <div className="w-full max-w-[1632px] mx-auto mb-14">
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "10px" }}
        >
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleLogoutUser}
          >
            Logout
          </button>
        </div>
        <div className="mainBorder bg-[#D9E6F7] flex justify-center lg:mt-14  cursor-pointer">
          <h3 className="text-[64px] font-bold">Easy</h3>
        </div>
        <div className="flex justify-center mt-16">
          <button
            className="bigButton w-[655px] h-[143px] text-white font-semibold text-5xl"
            onClick={() => setShowModal(true)}
          >
            Add Details
          </button>
        </div>
        <div className="w-full max-w-[836px] mx-auto">
          <div className="flex justify-center mt-8">
            <button
              className="bigButton w-[100px] h-[100px] text-white flex justify-center items-center"
              onClick={() => handleImageScrollPosition("UP")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                />
              </svg>
            </button>
          </div>
          <div ref={printRef}>
            <Template />
          </div>
          <div className="flex justify-center mb-8">
            <button
              className="bigButton w-[100px] h-[100px] text-white  flex justify-center items-center"
              onClick={() => handleImageScrollPosition("DOWN")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="4"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center flex-col items-center">
            <div className="chooseBtn">
              <input
                multiple={false}
                onChange={uploadImage}
                className="cursor-pointer bigButton md:w-[655px] px-12 pt-14 pb-12  text-white font-semibold md:text-3xl flex justify-center items-center text-3xl"
                style={{ width: "100%", heigth: "100%" }}
                type="file"
              />
            </div>
            <div className="flex w-full max-w-[845px] mt-14 justify-between items-center lg:flex-row flex-col">
              <img
                onClick={() => updateTemplateKey(templateKeys.ALPHA)}
                src={"assets/icons/TemplateImage1.png"}
                alt="Tmp_Img"
              />
              <img
                onClick={() => updateTemplateKey(templateKeys.BETA)}
                src={"assets/icons/TempImage2.png"}
                alt="Tem_Img"
              />
            </div>
            <div className="mt-[300px] relative">
              <img
                src={"assets/icons/writerMen.png"}
                alt="Icon"
                className="absolute top-[-197px] right-[20px]"
              />
              <button
                onClick={handleDownloadPdf}
                className="bigButton w-[655px] h-[143px] text-white font-semibold text-5xl"
              >
                Save picture
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <InputModal setShowModal={setShowModal} />}
    </>
  );
};

export default memo(MainView);
