import { createContext, useEffect, useState } from "react";
import {
  addUserService,
  getUsers,
  saveUserService,
} from "../services/admin.service";
import { toast } from "react-toastify";

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState(null);

  const triggerAddUser = () => {
    setIsAdding(!isAdding);
  };

  const updateEditing = () => {
    isAdding && setIsAdding(!isAdding);
    selectedUser && setSelectedUser(null);
  };

  const setSingleSelectedUser = (user) => {
    user && setSelectedUser(user);
  };

  const getAllUsers = async () => {
    const users = await getUsers();
    if (users) {
      setUsers(users);
      return;
    }
    toast("Unable to get users");
  };

  const addNewUSer = async (user) => {
    const { id, message } = await addUserService(user);
    if (id) {
      setUsers([user, ...users]);
      toast("User Added successfully");
      updateEditing();
      return;
    }
    message && toast(message);
  };

  const saveUser = async (updateUser) => {
    const { user, message } = await saveUserService(updateUser);
    if (user) {
      const userIndex = users.findIndex(
        (singleUser) => singleUser.email === user.email
      );
      if (userIndex >= 0) {
        users[userIndex] = user;
        setUsers([...users]);
        setSelectedUser(null);
        toast("User updated successfully");
        updateEditing();
        return;
      }
      toast("Something went wrong");
      return;
    }
    toast(message);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdding,
        updateEditing,
        users,
        selectedUser,
        setSingleSelectedUser,
        triggerAddUser,
        addNewUSer,
        saveUser,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminContextProvider;
