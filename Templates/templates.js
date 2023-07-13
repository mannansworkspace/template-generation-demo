import { templateKeys } from "../constants";
import Alpha from "./alpha.template";
import Beta from "./beta.template";

const templates = {
  [templateKeys.ALPHA]: <Alpha />,
  [templateKeys.BETA]: <Beta />,
};

export default templates;
