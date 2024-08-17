import "./Box.css";
import { useState } from "react";
import ShowUser from "./ShowUser";

const Box = (user) => {
  const [color, setColor] = useState(false);

  const handleClick = () => {
    // console.log("before change:", color);
    setColor(!color);
  };
  return (
    <div onClick={handleClick} id="box" className={color ? "blue" : "red"}>
      {console.log("after change:", color)}
      {color ? <ShowUser user={user.user} /> : <p>* * * RED * * *</p>}
    </div>
  );
};

export default Box;
