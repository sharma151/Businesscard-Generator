import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
