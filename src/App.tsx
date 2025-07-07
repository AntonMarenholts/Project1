import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import MyPicture from "./assets/Петрик.jpg"; 

function App() {
  // создать компонент,который бы возвращал div
  // внутри которого находится информация
  // "Thank you for using our services!"

  // Создайте компонент с картинкой Card
  // пусть там будет тег img внутри контейнера div
  // пусть ссылка на картинку передаётся при помощи пропса url
  return (
    <>
      <Greeting name={"Vasiliy"} />
      <Greeting name={"Pety"} age={18} />
      <ThankYou />
      <Card url="https://upload.wikimedia.org/wikipedia/uk/0/07/%D0%9F%D0%B5%D1%82%D1%80%D0%B8%D0%BA.jpg" />
      <img src={MyPicture} alt="" />
      
    </>
  );
}
export default App;