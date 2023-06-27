import { SyntheticEvent, useRef, useState } from "react";
export type patient = {
  fullName: string;
  age: number | string;
  occupation: string;
  phoneId: number | string;
  address: string;
  gender: string;
};
export const SERVER_ERROR = {
  type: "error",
  content: "هناك عطل بالسيرفر ، حاول لاحقاً",
};
export function useRegister() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const occupationRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const maleRef = useRef<HTMLInputElement>(null);
  const femaleRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(false);

  const handleBlur = (e: SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    if (target.value === "") {
      target.parentElement!.classList.remove("move");
    } else {
      target.parentElement!.classList.add("move");
    }
  };
  function handleFocus(e: SyntheticEvent) {
    const target = e.target as HTMLInputElement;
    target.parentElement!.classList.add("move");
  }
  function handleValid() {
    if (
      nameRef.current?.value &&
      addressRef.current?.value &&
      occupationRef.current?.value &&
      numberRef.current?.value &&
      ageRef.current?.value
    )
      setIsValid(true);
    else setIsValid(false);
  }
  function reset() {
    document.querySelectorAll(".input-container").forEach((e) => {
      e?.classList.remove("move");
    });
    setIsValid(false);
  }
  function getFormData(payload: patient) {
    payload.fullName = nameRef.current?.value!;
    payload.age = +ageRef.current?.value!;
    payload.occupation = occupationRef.current?.value!;
    payload.phoneId = +numberRef.current?.value!;
    payload.address = addressRef.current?.value!;
    payload.gender = [maleRef, femaleRef].filter(
      (e) => e.current?.checked && e.current
    )[0].current?.id!;
    return payload;
  }
  function clearInputs() {
    nameRef.current!.value = "";
    ageRef.current!.value = "";
    addressRef.current!.value = "";
    occupationRef.current!.value = "";
    numberRef.current!.value = "";
  }
  return {
    handleBlur,
    handleFocus,
    getFormData,
    handleValid,
    clearInputs,
    reset,
    isValid,
    addressRef,
    ageRef,
    femaleRef,
    maleRef,
    nameRef,
    occupationRef,
    numberRef,
  };
}
