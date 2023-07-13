import { memo, useContext, useState } from "react";
import { AdminContext } from "../../contexts/admin.context";
import defaultUser  from "./userDefault";
import {
  defaultAttributes,
  defaultSideBarInputs,
  templateKeys,
} from "../../constants";

const AddUser = () => {
  const { updateEditing, isAdding, selectedUser, addNewUSer, saveUser } =
    useContext(AdminContext);

  let [userDetails, setUserDetails] = useState(
    isAdding ? defaultUser : selectedUser
  );

  const { name, templates, password, email } = userDetails;
  let [currentTemplate, setCurrentTemplate] = useState(templates[0]);

  const onValueChange = (key, attribute, value, min, max) => {
    console.log(
      { key, attribute },
      parseInt(value),
      min,
      max,
      currentTemplate[key][attribute]
    );
    // if (parseInt(value) >= min && parseInt(value) <= max) {
      currentTemplate[key][attribute] = parseInt(value);
      console.log(currentTemplate);
      setCurrentTemplate({ ...currentTemplate });
    // }
  };

  const findCurrentTemplateIndex = () => {
    const index = userDetails.templates.findIndex(
      (template) => template.templateName === currentTemplate.templateName
    );
    return index;
  };

  const onTemplateChange = (newTemplate) => {
    const index = findCurrentTemplateIndex();

    userDetails.templates[index] = { ...currentTemplate };
    currentTemplate = newTemplate;

    setCurrentTemplate(currentTemplate);
    setUserDetails(userDetails);
  };

  const onSaveOrAddUser = () => {
    const index = findCurrentTemplateIndex();
    userDetails.templates[index] = { ...currentTemplate };

    isAdding ? addNewUSer({ ...userDetails }) : saveUser({ ...userDetails });
  };

  const onChangeNameOrPAssword = (e) => {
    userDetails[e.target.name] = e.target.value;
    console.log(userDetails);
    setUserDetails({ ...userDetails });
  };

  console.log({ userDetails });
  return (
    <div className="p-12">
      <button
        onClick={updateEditing}
        className="bigButton flex items-center px-3 py-4 text-[#fff]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
          />
        </svg>
        <p className="ml-3">Back To Admin</p>
      </button>
      <div className="flex items-center mt-3">
        <h2 className="text-4xl font-bold w-[290px]">User: </h2>
        <div className="text-2xl font-semibold w-[250px] text-center p-3  bg-gray-200 rounded-lg h-[60px]">
          <input
            type="text"
            className="w-[214px] relative top-[-2px] rounded-lg pl-4 pr-2 py-1 text-center"
            value={name}
            name="name"
            onChange={onChangeNameOrPAssword}
          />
        </div>
      </div>
      <div className="flex items-center mt-3">
        <h2 className="text-4xl font-bold w-[290px]">Email: </h2>
        <div className="text-2xl font-semibold w-[250px] text-center p-3  bg-gray-200 rounded-lg h-[60px]">
          <input
            type="text"
            className="w-[214px] relative top-[-2px] rounded-lg pl-4 pr-2 py-1 text-center"
            value={email}
            name="email"
            onChange={onChangeNameOrPAssword}
          />
        </div>
      </div>
      <div className="flex items-center mt-1">
        <h2 className="text-4xl font-bold w-[290px]">Password: </h2>
        <div className="text-2xl font-semibold w-[250px] text-center p-3  bg-gray-200 rounded-lg h-[60px]">
          <input
            type="text"
            className="w-[214px] relative top-[-2px] rounded-lg pl-4 pr-2 py-1 text-center"
            value={password}
            name="password"
            onChange={onChangeNameOrPAssword}
          />
        </div>
      </div>
      <div className="flex items-center mt-1">
        <h2 className="text-4xl font-bold w-[290px]">Template Name:</h2>
        <h4 className="text-3xl font-medium ml-4 mt-2 text-[#424242]">
          {currentTemplate.templateName}
        </h4>
      </div>
      <table className="w-full mt-12">
        <tr className="h-16 w-full flex justify-between text-[#424242] text-4xl font-semibold  text-center">
          <td className="w-[200px]"></td>
          <td className="w-[250px] ">X</td>
          <td className=" w-[250px]">Y</td>
          <td className=" w-[250px]">Font Size</td>
          <td className="w-[250px] ">Height</td>
          <td className="w-[250px]">Width</td>
        </tr>
        {defaultSideBarInputs.map((key) => (
          <tr className="h-[84px] w-full flex justify-between items-center ">
            <td className="text-4xl font-semibold w-[200px] p-3 text-[#424242]">
              {key}
            </td>
            {defaultAttributes.map((attribute) => (
              <td className="text-2xl font-semibold w-[250px] text-center p-3  bg-gray-200 rounded-lg h-[60px]">
                <input
                  type="number"
                  className="w-[214px] relative top-[-2px] rounded-lg pl-4 pr-2 py-1 text-center"
                  value={
                    parseInt(currentTemplate[key.toLowerCase()][attribute]) || 0
                  }
                  onChange={(e) => {
                    onValueChange(
                      key.toLowerCase(),
                      attribute,
                      e.target.value,
                      e.target.min,
                      e.target.max
                    );
                  }}
                  // max={inputValidations[key.toLowerCase()][attribute]["max"]}
                  // min={inputValidations[key.toLowerCase()][attribute]["min"]}
                  step={"1"}
                />
              </td>
            ))}
          </tr>
        ))}
      </table>
      <div className="flex justify-center">
        <div className="flex w-full max-w-[845px] mt-14 justify-between items-center lg:flex-row flex-col">
          {userDetails?.templates.map((template) => {
            return (
              <div onClick={() => onTemplateChange(template)}>
                <img
                  src={`${
                    template.templateName === templateKeys.ALPHA
                      ? "assets/icons/TemplateImage1.png"
                      : "assets/icons/TempImage2.png"
                  }`}
                  alt="Tmp_Img"
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={onSaveOrAddUser}
        className="bigButton flex items-center justify-center w-[320px] py-6 mt-16 mx-auto text-[#fff]"
      >
        <p className="ml-3 text-5xl font-bold">{isAdding ? "Add" : "Save"}</p>
      </button>
    </div>
  );
};
export default memo(AddUser);
