import { NavbarLogo } from "./navbar-logo";
import { NavbarLinks } from "./navbar-links";
import {
  navbarContainerStyle,
  navbarStyle,
} from "./navbar.styles";

export function Navbar() {
  return (
    <header style={navbarStyle}>
      <div style={navbarContainerStyle}>
        <NavbarLogo />
        <NavbarLinks />
      </div>
    </header>
  );
}