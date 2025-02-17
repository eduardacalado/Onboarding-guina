import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./app/modules/auth/auth.routes";
import { LoginPage } from "./app/modules/auth/login.page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path={authRoutes.login} element={<LoginPage />} />
    </Routes>
  );
}
