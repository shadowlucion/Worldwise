import styles from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
// import NavPage from './NavPage';
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
export default function Sidebar() {
  // Your component logic and state can go here

  return (
    <div className={`${styles.sidebar}`}>
      <Logo />
      <AppNav />
      <Outlet />

      <Footer />
    </div>
  );
}
