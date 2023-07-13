import { memo, useContext } from "react";
import UserTable from "./userTable";
import { AdminContext } from "../../contexts/admin.context";
import AddUser from "./addUser";

const AdminPanel = () => {
  const { isAdding, selectedUser } = useContext(AdminContext);
  return <>{(isAdding || selectedUser) ? <AddUser /> : <UserTable />}</>;
};
export default memo(AdminPanel);
