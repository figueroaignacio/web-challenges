import { Outlet } from "react-router";
import { Header } from "../components/header";

export function Layout() {
  return (
    <>
      <Header />
      <main className="flex justify-center max-w-7xl mx-auto min-h-[80dvh] px-5 lg:px-12 py-12">
        <Outlet />
      </main>
    </>
  );
}
