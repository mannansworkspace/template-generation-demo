import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../pages/main.page";
import LoginPage from "../pages/login.page";
import Admin from "../pages/admin.page";

const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
