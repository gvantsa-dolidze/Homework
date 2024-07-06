import "./App.css";
import CheckButton from "./components/buttons/CheckButton";
import Header from "./components/header/Header";

const App = () => {
  return (
    <div className="App">
         <Header logo="LoGo"
                 nav1="Kitchen"
                 nav2="Dinnerware"
                 nav3="Bath"
                 nav4="Textile"
         />
       
       <h1>Click the "Change" button</h1>
      <CheckButton text="Change"/>
    </div>
  );
}

export default App;
