import Link from "next/link";

import { NAVIGATION_ITEMS } from "@/constants/navigation/navigation";
import {
  navbarLinkStyle,
  navbarLinksStyle,
} from "./navbar.styles";

export function NavbarLinks() {
  return (
    <nav aria-label="Primary Navigation">
      <ul style={navbarLinksStyle}>
        {NAVIGATION_ITEMS.map((item) => (
          <li key={item.href}>
            <Link href={item.href} style={navbarLinkStyle}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}