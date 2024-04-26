import { Outlet } from "react-router-dom";
import { TopBar } from "../TopBar/TopBar";
import { Footer } from "../Footer/Footer";

export function Layout() {
  return (
    <div>
      <TopBar />
      <Outlet />
      <Footer />
    </div>
  );
}
