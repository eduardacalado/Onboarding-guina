import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./app/modules/auth/auth.routes";
import { LoginPage } from "./app/modules/auth/login.page/login.page";
import { userRoutes } from "./app/modules/user/user.routes";
import { HomePage } from "./app/modules/user/home.page/home.page";
import { RegisterPage } from "./app/modules/auth/register.page/register.page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path={authRoutes.login} element={<LoginPage />} />
      <Route path={authRoutes.register} element={<RegisterPage />} />
      <Route path={userRoutes.home} element={<HomePage />} />
    </Routes>
  );
}
