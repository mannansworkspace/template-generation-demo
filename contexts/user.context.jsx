import { createContext, useEffect, useRef, useState } from "react";
import { inputFormConstants } from "../constants";
import {
  uploadImageService,
  saveForm,
  getSingleUserService,
} from "../services/user.service";
import { toast } from "react-toastify";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import defaultUser from "../components/admin/userDefault";
const defaultInputState = {
  [inputFormConstants.TITLE]: "Test",
  [inputFormConstants.DESCRIPTION]: "Test",
  [inputFormConstants.PHONE]: "090078601",
};

export const HomeContext = createContext();

const UserContextProvider = ({ children }) => {
  // const defaultUser = JSON.parse(localStorage.getItem('user'))

  const [userInputs, setUserInputs] = useState(defaultInputState);
  const [template, setTemplate] = useState(defaultUser?.templates[0]);
  const [imageUrl, setImageUrl] = useState("");
  const printRef = useRef();
  const [user, setUser] = useState(defaultUser);
  const [imageScrollPosition, setImageScrollPosition] = useState(0);

  const handleImageScrollPosition = (direction) => {
    console.log({ direction });
    setImageScrollPosition((prev) => (direction === "UP" ? --prev : ++prev));
  };

  const handleDownloadPdf = async () => {
    const component = printRef.current;
    console.log({ imageUrl });
    const backgroundImage = new Image();
    backgroundImage.src = imageUrl;
    await backgroundImage.decode();

    html2canvas(component)
      .then((canvas) => {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL();

        // Save the data URL as a file
        saveAs(dataUrl, "Template.png");
      })
      .catch((error) => {
        console.log("error : ", { error });
      });
    // const element = printRef.current;
    // const canvas = await html2canvas(element);
    // const data = canvas.toDataURL('image/png');

    // const pdf = new jsPDF();
    // const pdfWidth = pdf.internal.pageSize.getWidth();
    // const pdfHeight =pdf.internal.pageSize.getHeight();

    // pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    // pdf.save('print.pdf');
  };
  const updateTemplateKey = (key) => {
    const template = user.templates.find(
      (template) => key === template.templateName
    );
    setTemplate(template);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e?.target;
    setUserInputs({
      ...userInputs,
      [name]: value,
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = await uploadImageService(file);
      console.log(url);
      if (url) {
        setImageUrl(url);
        return;
      }
      toast("Unable to upload Image");
    }
    toast("Image not found");
  };

  //function save image

  // function save form

  const saveFormInfo = async () => {
    if (userInputs) {
      const saverUserInfo = await saveForm(userInputs);
      console.log(saverUserInfo);
    } else {
      toast("Please Enter Your Info");
    }
  };

  const getSingleUSer = async () => {
    const user = await getSingleUserService(defaultUser?.email);
    if (user) {
      toast("Welcome");
      const { templateBackgroundImage } = user;
      setUser(user);
      setImageUrl(templateBackgroundImage);
      setTemplate(user.templates[0]);
      return;
    }
    toast("User Not Found");
  };

  useEffect(() => {
    getSingleUSer();
  }, []);

  useEffect(() => {
    if (user) {
      const { templateTitle, templateDescription, templatePhone } = user;
      setUserInputs({
        [inputFormConstants.TITLE]: templateTitle,
        [inputFormConstants.DESCRIPTION]: templateDescription,
        [inputFormConstants.PHONE]: templatePhone,
      });
    }
  }, [user]);
  return (
    <HomeContext.Provider
      value={{
        userInputs,
        inputChangeHandler,
        template,
        updateTemplateKey,
        uploadImage,
        imageUrl,
        handleDownloadPdf,
        saveFormInfo,
        imageScrollPosition,
        handleImageScrollPosition,
        printRef,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
export default UserContextProvider;
