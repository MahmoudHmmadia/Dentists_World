import { GiHealthNormal } from "react-icons/all";
import Title from "../../components/title/Title";
import { advices } from "../../data/data";
import { motion as m } from "framer-motion";
import "./advices.scss";
function Advices() {
  let del = 0;
  return (
    <div className="advices section" id="نصائح">
      <div className="container">
        <Title title="نصائح" icon={<GiHealthNormal />} />
        <div className="advices__content flex flex-column g-1">
          {advices.map((advice, index) => (
            <m.div
              className="advice radius-m p-2 light-box-shadow flex g-1 align-center justify-center txt-c white-bg "
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
              <div className="image">
                <img src={advice.image} alt="Advice" />
              </div>
              <div className="information flex flex-column g-1 flex-1">
                <h2 className="cl-bl">{advice.title}</h2>
                <p className="cl-t fs-small">{advice.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Advices;
