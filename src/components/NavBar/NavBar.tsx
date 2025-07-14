import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ROUTES } from "../../constants/routes";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/registration" className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to="/gender-determination" className={classSelector}>
          Gender determination
        </NavLink>
        <NavLink to="/age-predictor" className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to="/counter" className={classSelector}>
          Counter
        </NavLink>
        <NavLink to="/weight-calculator" className={classSelector}>
          Weight calculator
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to="/products" className={classSelector}>
          Products
        </NavLink>
        <NavLink to="/users" className={classSelector}>Users</NavLink>
      </nav>
    </>
  );
};
