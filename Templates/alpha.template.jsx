import React, { useContext } from "react";
import { HomeContext } from "../contexts/user.context";
import { inputFormConstants } from "../constants";

function Alpha() {
  const {
    userInputs: { title, description, phone },
    imageUrl,
    template,
    imageScrollPosition,
  } = useContext(HomeContext);

  return (
    <div className="mainBorder w-full max-w-[836px] h-[836px] mt-14 mb-14">
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
        className="relative"
      >
        <div className="MainImageYellowBorder h-[150px] w-[150px] absolute -bottom-2 left-1"></div>
        <div className="MainImageBlueBorder h-[145px] w-[145px] absolute top-1 right-1"></div>
      </div>
      <div className="flex justify-center relative ">
        <div className=" w-[549px] absolute top-[-125px]">
          <div className="border-2 border-[#FA991C] border-solid px-6 py-5  mx-auto h-[395px] w-[459px]">
            <div className="bg-[#0F4E7B] h-[354px] w-full py-3 px-10">
              <p
                style={{
                  fontSize: `${
                    template[inputFormConstants.TITLE]["fontSize"]
                  }px`,
                  left: `${template[inputFormConstants.TITLE]["x"]}px`,
                  top: `${template[inputFormConstants.TITLE]["y"]}px`,
                  minHeight: `${
                    template[inputFormConstants.TITLE]["height"]
                  }px`,
                  minWidth: `${template[inputFormConstants.TITLE]["width"]}%`,
                }}
                className="text-white flex justify-center relative my-4 font-semibold"
              >
                {/* Its a font size for the title  */}
                {title}
              </p>
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
                  minWidth: `${
                    template[inputFormConstants.DESCRIPTION]["width"]
                  }%`,
                }}
                className="text-white relative flex justify-center mt-8"
              >
                {/* its a font size for the description */}
                {description}
              </p>
            </div>
            <div
              style={{
                left: `${template[inputFormConstants.PHONE]["x"]}px`,
                top: `${template[inputFormConstants.PHONE]["y"]}px`,
                minHeight: `${template[inputFormConstants.PHONE]["height"]}px`,
                minWidth: `${template[inputFormConstants.PHONE]["width"]}%`,
              }}
              className="flex items-center justify-center mt-6 mb-2 relative"
            >
              <img src={"assets/icons/PhoneIcon.png"} alt="Phone" />
              <p
                style={{
                  fontSize: `${
                    template[inputFormConstants.PHONE]["fontSize"]
                  }px`,
                }}
                className="ml-2"
              >
                {phone}
              </p>
              {/* its a font size for the phone number */}
            </div>
          </div>
          <div className="border-b-[11px] rounded-lg border-[#FA991C] relative bottom-[-64px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Alpha;
