import "./App.css";
// import Card from "./components/Card/Card";

import ThankYou from "./components/ThankYou/ThankYou";
// import MyPicture from "./assets/Петрик.jpg";

import { Counter } from "./components/Counter/Counter";

import { AgePredictor } from "./components/AgePredictotr/AgePredictor";
import GenderDetermination from "./components/GenderDetermination/GenderDetermination";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import MainLayout from "./layout/MainLayout";
import { PonyLayout } from "./layout/PonyLayout";
import { ROUTES } from "./constans/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<MainLayout />} />
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route
              path={ROUTES.GENDER_DETERMINATION}
              element={<GenderDetermination />}
            />
            <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.WEIGHT_CALCULATOR} element={<WeightCalculator />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/pony" element={<PonyLayout />}>
             <Route path="/pony/my-pony" element={<PonyLayout />} />
             <Route path="/pony/buy-pony" element={<PonyLayout />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <SpaceMissionForm />
      <Demo />

      <Greeting name={"Vasiliy"} />
      <Greeting name={"Pety"} age={18} />
      <PersonalGreeting />
      <Goodbye />
      
      
      <Counter /> */}

      {/* <ProfileCard
        avatar="https://masterpiecer-images.s3.yandex.net/d50dc9569a3b11eea2d7c2292fe7483c:upscaled"
        name="cheerful alcoholic"
        description="Here's to your health!"
      /> */}
      <ThankYou />
      {/* <Card url="https://upload.wikimedia.org/wikipedia/uk/0/07/%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D0%BA.jpg" />
      <img src={MyPicture} alt="" /> */}
    </>
  );
}
export default App;
