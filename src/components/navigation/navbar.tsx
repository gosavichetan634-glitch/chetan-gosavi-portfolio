import { NavbarActions } from "./navbar-actions";
import { NavbarLinks } from "./navbar-links";
import { NavbarLogo } from "./navbar-logo";
import {
  navbarContainerStyle,
  navbarStyle,
} from "./navbar.styles";

export function Navbar() {
  return (
    <header style={navbarStyle}>
      <div style={navbarContainerStyle}>
        <NavbarLogo />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <NavbarLinks />
          <NavbarActions />
        </div>
      </div>
    </header>
  );
}