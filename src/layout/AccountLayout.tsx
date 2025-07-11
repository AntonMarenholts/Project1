import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../constants/routes";

export const AccountLayout = () => {
  return (
    <>
      <nav>
        <NavLink to={ROUTES.ACCOUNT_SETTINGS}>Account setting</NavLink>
        <NavLink to={ROUTES.ACCOUNT_INFO}>Personal information</NavLink>
      </nav>

      <Outlet />
    </>
  );
};