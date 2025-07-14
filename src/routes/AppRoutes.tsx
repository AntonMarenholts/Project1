import { Routes, Route } from "react-router-dom";
import { AgePredictor } from "../components/AgePredictotr/AgePredictor";
import { Counter } from "../components/Counter/Counter";
import GenderDetermination from "../components/GenderDetermination/GenderDetermination";
import WeightCalculator from "../components/WeightCalculator/WeightCalculator";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import MainLayout from "../layout/MainLayout";
import { PonyLayout } from "../layout/PonyLayout";
import { ROUTES } from "../constants/routes";
import About from "../pages/About/About";
import { AccountLayout } from "../layout/AccountLayout";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import { ProductsList } from "../components/ProductsList/ProductsList";
import ProductPage from "../pages/ProductsPage/ProductPage";
import { UsersPage } from "../pages/UsersList/UsersPage";
import { UserPage } from "../pages/UserPage/UserPage";
import Login from "../pages/Login/Login";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />

          <Route
            path={ROUTES.GENDER_DETERMINATION}
            element={<GenderDetermination />}
          />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route
            path={ROUTES.WEIGHT_CALCULATOR}
            element={<WeightCalculator />}
          />
          <Route path={ROUTES.ABOUT} element={<About />} />

          <Route path="/products">
            <Route index element={<ProductsList />} />
            <Route path=":id" element={<ProductPage />} />
          </Route>

          <Route path="/pony" element={<PonyLayout />}>
            <Route path="/pony/my-pony" element={<PonyLayout />} />
            <Route path="/pony/buy-pony" element={<PonyLayout />} />
          </Route>

          <Route path={"/products"} element={<ProductsList />} />
          <Route path={"/products/:id"} element={<ProductPage />} />

          <Route path="*" element={<NotFound />} />

          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
            <Route path={ROUTES.ACCOUNT_INFO} element={<AccountInfo />} />
          </Route>
          <Route path={ROUTES.USERS} element={<UsersPage />} />
          <Route path={ROUTES.USERS + "/:id"} element={<UserPage />} />
        </Route>
      </Routes>
    </>
  );
}
