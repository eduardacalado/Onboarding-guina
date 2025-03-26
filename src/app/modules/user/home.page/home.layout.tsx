import { Outlet } from "react-router-dom";

export function HomeLayout() {
  return (
    <div>
      <header>
        <p>Header</p>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
