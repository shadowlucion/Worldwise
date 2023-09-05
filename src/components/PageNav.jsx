import { NavLink } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo";
import { useAuth } from "../contexts/FakeAuthContext";

export default function NavPage() {
  const { isAuthenticated } = useAuth();

  return (
    <div className={style.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/product">Product Page</NavLink>
        </li>
        {!isAuthenticated && (
          <li>
            <NavLink to="/login" className={style.ctaLink}>
              Login
            </NavLink>{" "}
          </li>
        )}
      </ul>
    </div>
  );
}
