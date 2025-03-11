import { Outlet } from "react-router"
import { Header } from "../components/header"

export function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto min-h-dvh px-3 my-12">
        <Outlet />
      </main>
    </>
  )
}
