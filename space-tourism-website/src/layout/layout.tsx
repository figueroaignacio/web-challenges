import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
  return (
    <>
      <Header />
      <h2>asfsad</h2>
      <main>
        <Outlet />
      </main>
    </>
  );
}
