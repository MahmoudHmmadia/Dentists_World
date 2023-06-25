import Title from "../../components/title/Title";
import {
  FaProjectDiagram,
  BsFillInfoCircleFill,
  FcIdea,
} from "react-icons/all";
import image1 from "../../assets/images/info2.svg";
import { nanoid } from "@reduxjs/toolkit";
import { skillsInfo } from "../../data/data";
import { motion as m } from "framer-motion";
import "./info.scss";
function Info() {
  let del = 0;
  return (
    <div className="info section" id="معلومات">
      <div className="container">
        <Title title="معلومات" icon={<BsFillInfoCircleFill />} />
        <div className="info__content flex flex-column g-2">
          <div className="box flex g-2 align-center">
            <div className="information blue_gradient_bg flex-1 flex align-center flex-column g-1 p-4">
              <Title
                title="مين نحنا"
                icon={<FcIdea />}
                color="#fff"
                size="25px"
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
                className="cl-light-w txt-c fs-small"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: {
                    duration: 0.2,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 80,
                  },
                }}
              >
                نحنا مهندسين بالمقام الأول ، و كون أول صفة بالمهندس هيي القدرة
                على حل المشاكل ، حاولنا حل المشكلة يلي بيواجهها طلاب طب الأسنان
                ليلاقوا مرضى لعيادات الجامعة ، بالمهارات ال بين ايدينا
              </m.p>
            </div>

            <m.div
              className="image"
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
              <img src={image1} alt="" />
            </m.div>
          </div>
          <div className="box flex g-2 align-center">
            <div className="skills flex w-35 flex-wrap g-2 centering-content">
              {skillsInfo.map((skill) => (
                <m.div
                  key={skill.icon.toString()}
                  className="circle fs-med cl-w skill centering-content"
                  style={{ backgroundColor: skill.color }}
                  whileInView={{
                    opacity: [0, 1],
                    scale: [0, 1],
                    transition: {
                      duration: 0.1,
                      delay: (del += 0.1),
                      type: "spring",
                      stiffness: 80,
                    },
                  }}
                >
                  <skill.icon />
                </m.div>
              ))}
            </div>
            <div className="information blue_gradient_bg flex-1 flex align-center flex-column g-1 p-5 skills-info">
              <Title
                title="شو هي المهارات"
                icon={<FaProjectDiagram />}
                color="#fff"
                size="25px"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: {
                    duration: 0.2,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 80,
                  },
                }}
              />
              <m.p
                className="cl-light-w txt-c fs-small"
                whileInView={{
                  opacity: [0, 1],
                  y: [50, 0],
                  transition: {
                    duration: 0.2,
                    delay: 0.6,
                    type: "spring",
                    stiffness: 80,
                  },
                }}
              >
                مهاراتنا بتتلخص بالقدرة على بناء ويب أبلكيشنز بأحدث أطر العمل
                الموجودة بالعالم و يلي بتساعدنا لعمل بنية احترافية و تفاعلية
                بتصاميم جميلة و مخرجات عمل ممتازة بتأدي المطلوب لحل مشكلة معينة
                أو تقديم خدمة مطلوبة بشكل تقني ، بالإضافة لتقديم نموذج شبكي كامل
                لتنفيذ أي أبلكيشن حسب المعطيات و الريسورسيز المتوفر ببيئة العمل
              </m.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
