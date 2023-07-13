import http from "./http.service";

export const addNewUser = async (payload) => {};

export const getUsers = async () => {
  try {
    const { data } = await http.get("/all");
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const addUserService = async (payload) => {
  try {
    const {
      data: { _id },
    } = await http.post("/add", payload);
    if (_id) {
      return { id: _id };
    }
  } catch (error) {
    const message = error?.response?.data.message;
    return { message };
  }
};

export const saveUserService = async (payload) => {
  try {
    const { data } = await http.put("/update", payload);
    if (data) {
      return { user: data };
    }
    return { message: "Something Went Wrong" };
  } catch (error) {
    const message = error?.response?.data.message;
    return { message };
  }
};
