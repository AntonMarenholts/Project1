import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import { ROUTES } from "../../constants/routes";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCounter } from "../../hooks/useCounter";

export const NavBar = () => {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };

  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();
  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }
  return (
    <>
      {/* <nav className={styles.navBar}> */}
      <nav
        className={
          "flex justify-center items-center gap-4 min-h-14 flex-wrap bg-pink-200 p-6"
        }
      >
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
        <NavLink to="/users" className={classSelector}>
          Users
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign in
        </NavLink>
        <NavLink to={ROUTES.ADD_PRODUCTS} className={classSelector}>
          Add products
        </NavLink>
        <NavLink to={"/galery"} className={classSelector}>
          Galery
        </NavLink>
        <NavLink to={"/toogle-card"} className={classSelector}>
          Toogle Card
        </NavLink>
        <NavLink to={"/parent"} className={classSelector}>
          Parent
        </NavLink>
        {user?.email}
        {counter}

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
};
