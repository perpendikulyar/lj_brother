import { LJGuard } from "../../guards/LJguard";
import Report from "../report/Report";
import "./AppBody.css";

function showReport() {
  if (LJGuard.checkHostName()) {
    return <Report />;
  } else {
    return <div>It doesn't looks like LJ page</div>;
  }
}

function AppBody() {
  return <div className="app-body">{showReport()}</div>;
}

export default AppBody;
