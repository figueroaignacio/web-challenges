import {Route, Routes} from "react-router-dom";
import {routes} from "../config/navigation.tsx";

export function AppRouter() {
  return (
    <Routes>
      {routes.map((route, index: number) => (
        <Route path={route.path} element={route.element} key={index}/>
      ))}
    </Routes>
  )
}