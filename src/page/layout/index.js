import { Outlet, Link } from "react-router-dom";
import Banner from "../../component/banner";

const Layout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default Layout;
