import React, { useContext } from "react";
import { HomeContext } from "../contexts/user.context";
import { inputFormConstants } from "../constants";

function Beta() {
  const {
    userInputs: { title, description, phone },
    imageUrl,
    template,
    imageScrollPosition,
  } = useContext(HomeContext);

  return (
    <div className=" w-full max-w-[836px]  mt-14 mb-14 boxShadow">
      <div className="m-2">
        <img
          src="assets/icons/Rectangle9.png"
          height={"50px"}
          width={"100px"}
          alt="BETA"
        />
      </div>
      <div className="bg-[#15212F] py-4 flex justify-center mb-1">
        <h4
          style={{
            fontSize: `${template[inputFormConstants.TITLE]["fontSize"]}px`,
            left: `${template[inputFormConstants.TITLE]["x"]}px`,
            top: `${template[inputFormConstants.TITLE]["y"]}px`,
            minHeight: `${template[inputFormConstants.TITLE]["height"]}px`,
            minWidth: `${template[inputFormConstants.TITLE]["width"]}%`,
          }}
          className="relative font-bold text-white"
        >
          {title}
        </h4>
        {/* Its a font size for the title  */}
      </div>
      <div
        style={{
          backgroundImage: `url(${imageUrl || "assets/icons/Rectangle9.png"})`,
          height: "454px",
          width: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPositionY: `${imageScrollPosition}px`,
        }}
        className="relative mainBannerBg"
      ></div>
      <div className="bg-[#15212F]">
        <img
          src={"assets/icons/vectorImg.png"}
          alt="Vactor"
          className="w-full relative -top-16"
        />
        <div className="flex flex-col justify-center items-center px-2">
          <p
            style={{
              fontSize: `${
                template[inputFormConstants.DESCRIPTION]["fontSize"]
              }px`,
              left: `${template[inputFormConstants.DESCRIPTION]["x"]}px`,
              top: `${template[inputFormConstants.DESCRIPTION]["y"]}px`,
              minHeight: `${
                template[inputFormConstants.DESCRIPTION]["height"]
              }px`,
              minWidth: `${template[inputFormConstants.DESCRIPTION]["width"]}%`,
            }}
            className="text-white relative font-semibold  pb-4"
          >
            {/* Its a font size for the description */}
            {description}
          </p>
        </div>
        <div className="flex justify-center items-center mt-5 pb-5">
          <img src="assets/icons/TelephoneIcon.png" alt="Telephone" />
          <p
            style={{
              fontSize: `${template[inputFormConstants.PHONE]["fontSize"]}px`,
              left: `${template[inputFormConstants.PHONE]["x"]}px`,
              top: `${template[inputFormConstants.PHONE]["y"]}px`,
              minHeight: `${template[inputFormConstants.PHONE]["height"]}px`,
              minWidth: `${template[inputFormConstants.PHONE]["width"]}%`,
            }}
            className="ml-2 relative text-white font-bold"
          >
            {phone}
          </p>
          {/* Its a font size for the phone number  */}
        </div>
      </div>
    </div>
  );
}

export default Beta;
