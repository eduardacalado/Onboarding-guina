import { Route, Routes } from "react-router-dom";
import { authRoutes } from "./app/modules/auth/auth.routes";
import { userRoutes } from "./app/modules/user/user.routes";
import { AuthGuard } from "./app/guards/auth.guard";
import { HomeLayout } from "./app/modules/user/home.page/home.layout";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthGuard />}>
        <Route element={<HomeLayout />}>
          {userRoutes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Route>
      </Route>

      {authRoutes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}
