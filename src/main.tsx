import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/context";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);
