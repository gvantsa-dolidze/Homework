import "./App.css";
import CheckButton from "./components/buttons/CheckButton";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
      <Header version="ka"
        logo="LoGo"
        nav_en_1="Main"
        nav_en_2="Contact"
        nav_en_3="About us"
        nav_en_4="Products"
        nav_ka_1="მთავარი"
        nav_ka_2="კონტაქტი"
        nav_ka_3="ჩვენს შესახებ"
        nav_ka_4="პროდუქტები"
      />

      <h1>Click the "Change" button</h1>
      <CheckButton text="Change" />
    </div>
  );
};

export default App;
