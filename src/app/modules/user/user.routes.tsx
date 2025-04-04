import { RouteObject } from "react-router-dom";
import { HomePage } from "./home.page/home.page";
import { KanbanPage } from "./board/kanban.page";

export const userRoutes: RouteObject[] = [
  { path: "/home", element: <HomePage /> },
  { path: "/home/kanban", element: <KanbanPage /> },
];
