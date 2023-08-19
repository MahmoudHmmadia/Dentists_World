import Title from "../../components/title/Title";
import {
  MdEmail,
  FaMale,
  FaFemale,
  BsCalendarCheckFill,
  IoRefresh,
  AiFillHome,
} from "react-icons/all";
import registerImage from "../../assets/images/register.svg";
import logo from "../../assets/images/logo.png";
import { useRegister, patient, SERVER_ERROR } from "../../hooks/useRegister";
import { SyntheticEvent, useState } from "react";
import myAxios from "../../api/axios";
import { motion as m } from "framer-motion";
import "./register.scss";
import { AxiosError } from "axios";
import ServerResponse from "../../components/serverResponse";
import { UseContext } from "../../context/context";
function Register() {
  const {
    handleBlur,
    handleFocus,
    getFormData,
    handleValid,
    reset,
    isValid,
    addressRef,
    ageRef,
    femaleRef,
    maleRef,
    nameRef,
    numberRef,
    occupationRef,
    clearInputs,
  } = useRegister();
  const payload: patient = {
    fullName: "",
    address: "",
    age: "",
    gender: "",
    occupation: "",
    phoneId: "",
  };
  const { serverResponse, setServerResponse } = UseContext();
  const [isLoading, setIsLoading] = useState(false);
  async function handleSubmit(e: SyntheticEvent) {
    if (isValid) {
      setIsLoading(true);
      e.preventDefault();
      getFormData(payload);
      await myAxios
        .post("/patient", payload)
        .then(() => {
          clearInputs();
          setIsLoading(false);
          setServerResponse({
            type: "done",
            content: "تم تسجيل الدور بنجاح",
          });
        })
        .catch((err: AxiosError) => {
          clearInputs();
          setIsLoading(false);
          if (err.response?.status === 409)
            setServerResponse({
              content: "هذا الاسم مسجل سابقاً",
              type: "error",
            });
          else if (err.response?.status == 400)
            setServerResponse({
              content: "تأكد من تعبئة الحقول بقيم صحيحة",
              type: "error",
            });
          else setServerResponse(SERVER_ERROR);
        });
    }
  }
  return (
    <div className="register section relative" id="حجز دور">
      <div className="container">
        <Title title="تسجيل دور" icon={<BsCalendarCheckFill />} />
        <div className="register__content flex g-1 align-center">
          <m.div
            className="image w-50"
            whileInView={{
              scale: [0, 1],
              opacity: [0, 1],
              transition: {
                type: "spring",
                stiffness: 80,
                duration: 0.5,
                delay: 0.2,
              },
            }}
          >
            <img src={registerImage} alt="Register Page" />
          </m.div>
          <div className="form  p-4 h-100 flex-1 box-shadow overflow-hidden flex flex-column g-1 relative align-center">
            <div className="form__logo relative z-10000">
              <img src={logo} alt="Logo" />
            </div>
            {isLoading && (
              <div className="w-100 absolute centering-content h-100 blue_gradient_bg opacity-80 smooth t-0 l-0 progress z-100000">
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
            {serverResponse && (
              <>
                <div
                  className="fixed l-0 t-0 w-100 h-100 black-bg opacity-80"
                  style={{
                    zIndex: 11111,
                  }}
                ></div>
                <ServerResponse response={serverResponse} reset={reset} />
              </>
            )}
            <form
              action=""
              className="flex flex-column g-2 justify-center relative w-100"
              onSubmit={handleSubmit}
            >
              <div className="input-container relative">
                <label
                  htmlFor="name"
                  className="bold fs-small absolute input_label cl-t smooth-2"
                >
                  الاسم الثلاثي
                </label>
                <input
                  className="input-filed w-100 white-bg bold cl-b box-shadow"
                  type="text"
                  id="name"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete="off"
                  ref={nameRef}
                  onChange={handleValid}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="age"
                  className="bold fs-small absolute input_label cl-t smooth-2"
                >
                  العمر
                </label>
                <input
                  className="input-filed w-100 white-bg bold cl-b box-shadow"
                  type="text"
                  id="age"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete="off"
                  ref={ageRef}
                  onChange={handleValid}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="job"
                  className="bold fs-small absolute input_label cl-t smooth-2"
                >
                  المهنة
                </label>
                <input
                  className="input-filed w-100 white-bg bold cl-b box-shadow"
                  type="text"
                  id="job"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete="off"
                  ref={occupationRef}
                  onChange={handleValid}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="phone_number"
                  className="bold fs-small absolute input_label cl-t smooth-2"
                >
                  الرقم
                </label>
                <input
                  className="input-filed w-100 white-bg bold cl-b box-shadow"
                  type="text"
                  id="phone_number"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete="off"
                  ref={numberRef}
                  onChange={handleValid}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="address"
                  className="bold fs-small absolute input_label cl-t smooth-2"
                >
                  العنوان
                </label>
                <input
                  className="input-filed w-100 white-bg cl-b bold box-shadow"
                  type="text"
                  id="address"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  autoComplete="off"
                  ref={addressRef}
                  onChange={handleValid}
                />
              </div>
              <div className="input-container flex justify-end g-2">
                <div className="content pointer flex g-1">
                  <label
                    htmlFor="female"
                    className="pointer bold cl-b flex align-center"
                  >
                    <p>أنثى</p>
                    <div className="icon flex cl-m fs-med">
                      <FaFemale />
                    </div>
                  </label>
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    className="pointer cool-radio"
                    ref={femaleRef}
                  />
                </div>
                <div className="content pointer flex g-1">
                  <label
                    htmlFor="male"
                    className="pointer bold cl-b flex align-center"
                  >
                    <p>ذكر</p>
                    <div className="icon flex cl-m fs-med">
                      <FaMale />
                    </div>
                  </label>
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    className="pointer cool-radio"
                    defaultChecked
                    ref={maleRef}
                  />
                </div>
              </div>
              <m.button
                whileHover={{
                  scale: 1.2,
                }}
                disabled={isLoading}
                type="submit"
                className={`button  cl-w centering-content 
                    bold g-1 p-1 radius-s relative z-10000 fs-b-small m-auto w-80 ${
                      isValid
                        ? "blue_gradient_bg pointer"
                        : "mouse-none gray-bg"
                    }`}
              >
                <div className="icon cl-w flex">
                  <MdEmail />
                </div>
                <p className="">تسجيل الدور</p>
              </m.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
