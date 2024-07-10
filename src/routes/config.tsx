import { FriendsO, HomeO } from "@react-vant/icons";
import Home from "../views/home";
import Profile from "../views/profile";
import { RouteObject } from "react-router-dom";

type IRouteConfig = RouteObject & {
  name: string;
  icon: JSX.Element;
};

export const routeConfig: IRouteConfig[] = [
  {
    name: "首页",
    path: "/home",
    index: true,
    element: <Home />,
    icon: <HomeO />,
  },
  {
    name: "我的",
    path: "/profile",
    element: <Profile />,
    icon: <FriendsO />,
  },
];
