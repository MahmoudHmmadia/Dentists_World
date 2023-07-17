import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
type context = {
  serverResponse: undefined | { type: string; content: string };
  setServerResponse: Dispatch<
    SetStateAction<undefined | { type: string; content: string }>
  >;
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
};
const context = createContext<context>({
  serverResponse: undefined,
  setServerResponse: () => {},
  setToggle: () => {},
  toggle: false,
});
export const Provider = ({ children }: { children: ReactNode }) => {
  const [serverResponse, setServerResponse] = useState<
    undefined | { type: string; content: string }
  >(undefined);
  const [toggle, setToggle] = useState(false);
  return (
    <context.Provider
      value={{ serverResponse, setServerResponse, setToggle, toggle }}
    >
      {children}
    </context.Provider>
  );
};
export const UseContext = () => useContext(context);
