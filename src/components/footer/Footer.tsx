import { RiHeartPulseLine } from "react-icons/ri";
import "./footer.scss";
function Footer() {
  return (
    <div className="footer blue-bg p-2">
      <div className="container centering-content g-1">
        <h1 className="txt-c cl-w">Made With Love By Us</h1>
        <div className="icon fs-large cl-w flex">
          <RiHeartPulseLine />
        </div>
      </div>
    </div>
  );
}

export default Footer;
