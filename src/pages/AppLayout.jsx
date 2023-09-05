import { useEffect, useReducer } from "react";
import Map from "../components/Map";
import Sidebar from "../components/Sidebar";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./AppLayout.module.css";
import { useNavigate } from "react-router-dom";
import User from "../components/User";
// import AppNav from './../components/Na'
export default function AppLayout() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/login");
    },
    [isAuthenticated, navigate]
  );

  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}
