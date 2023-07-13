import http from "./http.service";

export const uploadImageService = async (file) => {
  try {
    const formData = new FormData();
    formData.append("image", file);
    const {
      data: { imageUrl },
    } = await http.post("/upload", formData);
    return imageUrl;
  } catch (error) {
    return null;
  }
};
export const saveForm = async ({ title, description, phone, email }) => {
  try {
    const {
      data: { formInfo },
    } = await http.post("/save-details", {
      email: email,
      userDetails: {
        templateTitle: title,
        templateDescription: description,
        templatePhone: phone,
      },
    });
    return formInfo;
  } catch (error) {
    console.log("Error Found");
    return null;
  }
};

export const saveImage = async (payload) => {
  try {
    const {
      data: { templateBackgroundImage },
    } = await http.post("/store", payload);
    return templateBackgroundImage;
  } catch (error) {
    console.log("Error Found");
    return null;
  }
};

export const getSingleUserService = async (email) => {
  try {
    const { data } = await http.post("/singleUser", { email });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
