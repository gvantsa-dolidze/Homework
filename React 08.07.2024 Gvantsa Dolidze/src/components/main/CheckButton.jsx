import { useState } from "react";
import Button from "./Button";
const CheckButton = () => {
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
    <div>
      <Button theme={theme} />
      <button className="btn btn-danger" onClick={changeTheme}>
        Change
      </button>
    </div>
  );
};

export default CheckButton;
