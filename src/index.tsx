import ReactDOM from "react-dom";
import { kcContext } from "./KcApp/kcContext";
import { KcApp } from "./KcApp";

if (kcContext === undefined) {
  throw new Error();
}
ReactDOM.render(
    <KcApp kcContext={kcContext} />,
  document.getElementById("root")
);
