import { Route, Routes } from "react-router";
import { Layout } from "./layout/layout";
import { Crew } from "./pages/crew";
import { Destination } from "./pages/destination";
import { Home } from "./pages/home";
import { Technology } from "./pages/technology";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Route>
    </Routes>
  );
}
