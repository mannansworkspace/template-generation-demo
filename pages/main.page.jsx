import MainView from "../components/mainView";
import UserContextProvider from "../contexts/user.context";

const Main = () => {
  return (
    <UserContextProvider>
      <MainView />
    </UserContextProvider>
  );
};
export default Main;
