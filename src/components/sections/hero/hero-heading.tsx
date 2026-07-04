import { PORTFOLIO } from "@/constants/portfolio/portfolio";

import {
  heroRoleStyle,
  heroTitleStyle,
} from "./hero.styles";

export function HeroHeading() {
  return (
    <>
      <h1 style={heroTitleStyle}>
        {PORTFOLIO.fullName}
      </h1>

      <h2 style={heroRoleStyle}>
        {PORTFOLIO.role}
      </h2>
    </>
  );
}