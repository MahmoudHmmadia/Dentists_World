import { useState } from "react";
import logo from "../../assets/images/logo.png";
import Hamburger from "../hamburger/Hamburger";
import NavLinkComponent from "../navLink/NavLinkComponent";
import {
  AiFillHome,
  BsFillInfoCircleFill,
  GiHealthNormal,
  BsCalendarCheckFill,
  GiDandelionFlower,
  AiTwotoneSetting,
  IoCloseCircle,
} from "react-icons/all";
import "./navbar.scss";
import { UseContext } from "../../context/context";
function Navbar() {
  const { setToggle, toggle } = UseContext();
  return (
    <nav
      className="white-bg box-shadow pt-1 pb-1"
      style={{
        boxShadow: "0 0 4px #0000004a",
      }}
    >
      <div className="container flex align-center justify-between">
        <ul className={`links flex g-2 justify-end ${toggle ? "show" : ""}`}>
          {toggle && (
            <>
              <li className="icon cl-m txt-c fs-x-large flower">
                <GiDandelionFlower />
              </li>
            </>
          )}
          <NavLinkComponent
            title={"الصفحة الرئيسية"}
            icon={<AiFillHome />}
            setToggle={setToggle}
          />
          <NavLinkComponent
            title={"معلومات"}
            icon={<BsFillInfoCircleFill />}
            setToggle={setToggle}
          />
          <NavLinkComponent
            title={"خدمات"}
            icon={<AiTwotoneSetting />}
            setToggle={setToggle}
          />
          <NavLinkComponent
            title={"نصائح"}
            icon={<GiHealthNormal />}
            setToggle={setToggle}
          />
          <NavLinkComponent
            title={"حجز دور"}
            icon={<BsCalendarCheckFill />}
            setToggle={setToggle}
          />
        </ul>
        <Hamburger toggle={toggle} setToggle={setToggle} />
        <div className="logo flex">
          <img src={logo} alt="LOGO" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
