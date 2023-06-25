import { Dispatch } from "react";
import "./hamburger.scss";
interface HamburgerI {
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}
function Hamburger({ toggle, setToggle }: HamburgerI) {
  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <div
      onClick={handleToggle}
      className={`${toggle ? "open" : ""} relative smooth pointer nav-icon`}
    >
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
      <span
        className={`absolute w-100 blue-bg ${toggle ? "red-bg" : ""}`}
      ></span>
    </div>
  );
}

export default Hamburger;
