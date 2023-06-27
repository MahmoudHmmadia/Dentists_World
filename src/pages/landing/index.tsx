import Title from "../../components/title/Title";
import { GiDandelionFlower, ImProfile } from "react-icons/all";
import { motion as m } from "framer-motion";
import landingImage from "../../assets/images/landing.png";
import "./landing.scss";
function Landing() {
  return (
    <div
      className="landing flex align-center relative section"
      id="الصفحة الرئيسية"
    >
      <div className="container flex g-2 align-center justify-between g-3 ">
        <m.div
          className="landing__image"
          whileInView={{
            opacity: [0, 1],
            x: [-300, 0],
            transition: {
              duration: 0.5,
              delay: 0.5,
              type: "spring",
              stiffness: 50,
            },
          }}
        >
          <img src={landingImage} alt={"landing"} />
        </m.div>
        <div className="landing__content flex-1 txt-e flex flex-column g-2">
          <Title
            title="أمل لابتسامة أجمل"
            icon={<GiDandelionFlower />}
            color="#fff"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: {
                duration: 0.2,
                delay: 0.2,
                type: "spring",
                stiffness: 50,
              },
            }}
          />
          <m.p
            className=" description cl-light-w"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: {
                duration: 0.2,
                delay: 0.4,
                type: "spring",
                stiffness: 50,
              },
            }}
          >
            لأن ابتسامتك حلوة ، و صحتك مهمة ، نحنا حريصين لتحافظ عليهن و تحميهن،
            من خلال تطبيقنا لح تكون قادر تحجز دور لفحص و معالجة أسنانك ، بالمجان
            تماماً ، أو بأسعار رمزية بحسب التشحيص و نوعية العلاج ، و حيتم هالشي
            عن طريق طلاب طب الأسنان و تحت إشراف أطباء مختصين بكل تأكيد ، شو
            منتظر ؟
          </m.p>
          <m.button
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: {
                duration: 0.2,
                delay: 0.6,
                type: "spring",
                stiffness: 50,
              },
            }}
            whileHover={{
              scale: 1.2,
            }}
            className="button cl-w main-bg w-fit txt-e sunny_gradient_bg radius-m"
          >
            <a
              href="#حجز دور"
              className="flex g-1 align-center fs-b-small pt-1 pb-1 pl-2 pr-2"
            >
              <div className="icon">
                <ImProfile />
              </div>
              سجل معلوماتك
            </a>
          </m.button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
