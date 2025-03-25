import { RouteObject } from "react-router-dom";
import { HomePage } from "./home.page/home.page";

export const userRoutes: RouteObject[] = [
  { path: "/home", element: <HomePage /> },
];
