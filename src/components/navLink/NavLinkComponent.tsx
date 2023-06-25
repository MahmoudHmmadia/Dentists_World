import { motion } from "framer-motion";
import "./nav-link-component.scss";
import { Dispatch, SetStateAction } from "react";
interface link {
  title: string;
  icon: any;
  setToggle: Dispatch<SetStateAction<boolean>>;
}
const NavLinkComponent = ({ title, icon, setToggle }: link) => {
  function handleToggle() {
    setToggle(false);
  }
  return (
    <>
      <motion.li
        whileHover={{
          color: "#2dc1e4",
        }}
        className="relative link"
        onClick={handleToggle}
      >
        <a
          href={`#${title}`}
          className="pointer bold relative centering-content g-1 link"
        >
          <span>{title}</span>
          <div className="icon flex">{icon}</div>
        </a>
      </motion.li>
    </>
  );
};

export default NavLinkComponent;
