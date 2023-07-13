import React, { memo, useContext } from "react";
import templates from "./templates";
import { HomeContext } from "../contexts/user.context";

import { useNavigate } from "react-router-dom";

const Template = () => {
  const { template } = useContext(HomeContext);

  const navigate = useNavigate();

  if(!template) navigate('/')
  
  return <>{templates[template.templateName]}</>;
};
export default memo(Template);
