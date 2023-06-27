import { motion as m } from "framer-motion";
import { CgCheck, CiWarning, IoMdReturnLeft } from "react-icons/all";
import Button from "../button";
import { useRegister } from "../../hooks/useRegister";
import { UseContext } from "../../context/context";
type res = {
  content: string;
  type: string;
};
type props = {
  response: res;
  reset?: () => void;
};
function ServerResponse({ response, reset }: props) {
  const { setServerResponse } = UseContext();
  return (
    <m.div
      className="fixed overflow-hidden l-50 p-3 radius-s flex flex-column g-2 cloudy-bg radius z-100000 dark-box-shadow order-res"
      style={{
        minWidth: "60%",
        top: "20%",
        transform: "translateX(-50%)",
        zIndex: "1111111111110000000000",
      }}
      initial={{
        opacity: 0,
        y: 150,
        x: "-50%",
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: "-50%",
      }}
    >
      <div
        className={`centering-content fs-x-large ${
          response.type == "error" ? "cl-r" : "cl-g"
        }`}
      >
        {response.type === "done" ? <CgCheck /> : <CiWarning />}
      </div>
      <h3 className="cl-t2 txt-c uppercase">{response.content}</h3>
      <div className="flex g-1 align-center">
        <Button
          bgColor="red-bg"
          color="cl-w"
          extraStyles="w-70 m-auto"
          content={`${response.type === "error" ? "المحاولة لاحقاً" : "حسناً"}`}
          icon={response.type === "error" ? IoMdReturnLeft : CgCheck}
          clickFunction={() => {
            setServerResponse(undefined);
            reset && reset();
          }}
          valid={true}
        />
      </div>
    </m.div>
  );
}
export default ServerResponse;
