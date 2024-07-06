import "./App.css";
import CheckButton from "./components/buttons/CheckButton";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
         <Header logo="LoGo"
                 nav1="Main"
                 nav2="Contact"
                 nav3="About us"
                 nav4="Products"
         />
       
       <h1>Click the "Change" button</h1>
      <CheckButton text="Change"/>
    </div>
  );
}

export default App;
