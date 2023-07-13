import AdminPanel from "../components/admin";
import AdminContextProvider from "../contexts/admin.context";

const Admin = () => {
  return (
    <AdminContextProvider>
      <AdminPanel />
    </AdminContextProvider>
  );
};
export default Admin;
