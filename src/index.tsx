import ReactDOM from "react-dom";
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";
import "./index.css";
import { defaultKcProps } from "keycloakify";

if (kcContext === undefined) {
  throw new Error();
}
ReactDOM.render(
    <KcApp kcContext={kcContext}
    {...{
      ...defaultKcProps,
      "kcHeaderWrapperClass": "my-class",
    }} />,
  document.getElementById("root")
);
