import { AiTwotoneSetting, GiClover } from "react-icons/all";
import Title from "../../components/title/Title";
import servicesPicture from "../../assets/images/services.svg";
import { services } from "../../data/data";
import { motion as m } from "framer-motion";
import "./services.scss";
function Services() {
  let del = 0;
  return (
    <div className="services section" id="خدمات">
      <div className="container">
        <Title title="خدمات" icon={<AiTwotoneSetting />} />
        <div className="services__content flex flex-column g-1">
          <div className="box flex g-2 align-center flex-wrap">
            <div className="description w-50 flex flex-column g-2">
              <Title
                title="شو حيقدمو طلبة و أطباء الأسنان للمرضى "
                icon={<GiClover />}
                color="#2dc1e4"
                size="22px"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: {
                    duration: 0.2,
                    delay: 0.1,
                    type: "spring",
                    stiffness: 80,
                  },
                }}
              />
              <m.p
                className="cl-w radius-s bold txt-c fs-small p-2 blue_gradient_bg"
                whileInView={{
                  opacity: [0, 1],
                  scale: [0, 1],
                  transition: {
                    duration: 0.2,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 50,
                  },
                }}
              >
                حيقومو بالبداية بتشخيص حالة المريض و تحديد العلاج المناسب لوضعو
                ، و بناءاً على التشخيص حيتم فرز المريض للعيادة المتخصصة بعلاجو
                ضمن الجامعة ، و حيتم العلاج بشكل مجاني تماماً أو بمبقابل مادي
                بسيط على حسب حالة الأسنان و نوع العلاج يلي بتحتاجو ، و حنعرض
                مجموعة من العلاجات ال حيتم توفيرها من قبل طلاب و أطباء الأسنان
              </m.p>
            </div>
            <m.div
              className="image w-40"
              whileInView={{
                opacity: [0, 1],
                x: [200, 0],
                transition: {
                  duration: 1.5,
                  delay: 0.2,
                  type: "spring",
                  stiffness: 80,
                },
              }}
            >
              <img src={servicesPicture} alt="Services" />
            </m.div>
          </div>
          <div className="services__group">
            {services.map((service, index) => (
              <m.div
                className="service p-2 light-box-shadow radius-m flex flex-column g-1 align-center txt-c white-bg"
                key={index}
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: {
                    duration: 0.2,
                    delay: (del += 0.2),
                    type: "spring",
                    stiffness: 80,
                  },
                }}
              >
                <div className="service__image">
                  <img src={service.image} alt="Service" />
                </div>
                <h3 className="service__title cl-m">{service.title}</h3>
                <p className="cl-t fs-x-small bold">{service.info}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
