import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto min-h-[80dvh] px-4">
        <Outlet />
      </main>
    </>
  );
}
