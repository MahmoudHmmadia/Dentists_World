import { motion as m } from "framer-motion";
import "./title.scss";
interface props {
  title: string;
  icon: any;
  color?: string;
  size?: string;
  animate?: any;
  initial?: any;
  whileInView?: any;
}
function Title({
  title,
  icon,
  color,
  size,
  initial,
  animate,
  whileInView,
}: props) {
  return (
    <m.h1
      className="fs-large cl-bl cool-title centering-content title"
      style={{
        color: color,
        fontSize: size,
      }}
      initial={initial}
      animate={animate}
      whileInView={whileInView}
    >
      {title}
      <div className="icon cl-m flex">{icon}</div>
    </m.h1>
  );
}

export default Title;
