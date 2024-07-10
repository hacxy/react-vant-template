import classNames from "classnames";
import { CommonTabbar, CommonNavBar } from "./components";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className={classNames("page-wrapper")}>
      <CommonNavBar />
      <div className={classNames("page-content")}>
        <Outlet />
      </div>
      <CommonTabbar />
    </div>
  );
}

export default App;
