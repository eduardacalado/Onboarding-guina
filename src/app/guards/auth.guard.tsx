import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../stores";

export function AuthGuard() {
  const { token } = useAuthStore();

  if (!(token.length > 1)) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
