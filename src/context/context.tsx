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
};
const context = createContext<context>({
  serverResponse: undefined,
  setServerResponse: () => {},
});
export const Provider = ({ children }: { children: ReactNode }) => {
  const [serverResponse, setServerResponse] = useState<
    undefined | { type: string; content: string }
  >(undefined);
  return (
    <context.Provider value={{ serverResponse, setServerResponse }}>
      {children}
    </context.Provider>
  );
};
export const UseContext = () => useContext(context);
