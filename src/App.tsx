import Navbar from "./components/navbar/Navbar";
import Landing from "./pages/landing";
import { FaTooth } from "react-icons/fa";
import Info from "./pages/info";
import Advices from "./pages/advices";
import Services from "./pages/services";
import Register from "./pages/register";
import Footer from "./components/footer/Footer";
import { motion as m } from "framer-motion";
import "./sass/app.scss";
import { Helmet } from "react-helmet";
import logo from "./assets/images/logo1.png";
function App() {
  return (
    <div className="app overflow-hidden relative">
      <Helmet>
        <link rel="icon" href={logo} />
        <title>| Dentists World</title>
      </Helmet>
      <Navbar />
      <div className="home relative">
        <m.div
          className="shape"
          whileInView={{
            opacity: [0, 1],
            rotate: [360, 0],
            transition: {
              duration: 10,
              type: "spring",
              stiffness: 40,
            },
          }}
        >
          <div className="tooth-icon cl-m absolute fs-large">
            <FaTooth />
          </div>
        </m.div>
        <Landing />
      </div>
      <Info />
      <Services />
      <Advices />
      <Register />
      <Footer />
    </div>
  );
}
export default App;
