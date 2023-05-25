import { Outlet } from "react-router-dom";
import ToastBox from "../../components/Toast/ToastBox";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastBox></ToastBox>
    </div>
  );
};

export default Root;
