import "./App.css";
// import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
// import MyPicture from "./assets/Петрик.jpg";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import SpaceMissionForm from "./components/SpaceMissionForm";
import Demo from "./components/Demo";
import { AgePredictor } from "./components/AgePredictotr/AgePredictor";
import GenderDetermination from "./components/GenderDetermination/GenderDetermination";

function App() {
  return (
    <>
      <AgePredictor />
      <GenderDetermination />
      <SpaceMissionForm />
      <Demo />

      <Greeting name={"Vasiliy"} />
      <Greeting name={"Pety"} age={18} />
      <PersonalGreeting />
      <Goodbye />
      <WeightCalculator />
      <Counter />
      <Counter />

      <ProfileCard
        avatar="https://masterpiecer-images.s3.yandex.net/d50dc9569a3b11eea2d7c2292fe7483c:upscaled"
        name="cheerful alcoholic"
        description="Here's to your health!"
      />
      <ThankYou />
      {/* <Card url="https://upload.wikimedia.org/wikipedia/uk/0/07/%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D0%BA.jpg" />
      <img src={MyPicture} alt="" /> */}
    </>
  );
}
export default App;
