import { Logo } from "../Logo/Logo";
import { NavBar } from "../NavBar/NavBar";
import { Link } from "react-router-dom";

export function TopBar() {
  return (
    <div>
      <NavBar />
      <Logo />
      <Link to="favourites">Ikona ulubione</Link>
      <Link to="my-profile">Ikona profilu</Link>
    </div>
  );
}
