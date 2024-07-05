import "./App.css";
import Button from "./components/main/Button";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("btn btn-primary");

  const changeTheme = () => {
    if (theme === "btn btn-primary") {
      setTheme("btn btn-secondary");
    } else if (theme === "btn btn-secondary") {
      setTheme("btn btn-warning");
    } else if (theme === "btn btn-warning") {
      setTheme("btn btn-danger");
    } else setTheme("btn btn-primary");
  };

  return (
    <div className="App">
      <Button theme={theme} />

      <button className="btn btn-success" onClick={changeTheme}>
        Change
      </button>
    </div>
  );
}

export default App;
