const defaultUser = {
  name: "Add Name",
  description: "Add Description",
  phone: "Aadd Phone",
  templateBackgroundImage: "",
  password: "Password",
  email: "test@test.com",
  templateTitle: "Test-Title",
  templatePhone: "090078601",
  templateDescription: "Test-Description",
  templates: [
    {
      templateDefaultImage: "assets/icons/TemplateImage1.png",
      templateName: "ALPHA",
      title: {
        x: 0,
        y: 0,
        fontSize: 22,
        height: 30,
        width: 0,
      },
      description: {
        x: 0,
        y: 0,
        fontSize: 20,
        height: 30,
        width: 0,
      },
      phone: {
        x: 0,
        y: 0,
        fontSize: 16,
        height: 30,
        width: 0,
      },
    },
    {
      templateName: "BETA",
      templateDefaultImage: "assets/icons/TempImage2.png",
      title: {
        x: 0,
        y: 0,
        fontSize: 22,
        height: 30,
        width: 0,
      },
      description: {
        x: 0,
        y: 0,
        fontSize: 20,
        height: 30,
        width: 0,
      },
      phone: {
        x: 0,
        y: 0,
        fontSize: 16,
        height: 30,
        width: 0,
      },
    },
  ],
};
export default defaultUser;

export const inputValidations = {
  title: {
    x: { max: 30, min: -30 },
    y: { max: 30, min: -30 },
    fontSize: { max: 0, min: 30 },
    height: { max: 50, min: 30 },
    width: { max: 100, min: 0 },
  },
  description: {
    x: { max: 30, min: -30 },
    y: { max: 30, min: -30 },
    fontSize: { max: 0, min: 30 },
    height: { max: 300, min: 30 },
    width: { max: 100, min: 0 },
  },
  phone: {
    x: { max: 100, min: -100 },
    y: { max: 12, min: -12 },
    fontSize: { max: 30, min: 0 },
    height: { max: 30, min: 79 },
    width: { max: 100, min: 9 },
  },
};
