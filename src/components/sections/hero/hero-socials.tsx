import Link from "next/link";

import { SOCIAL_LINKS } from "@/constants/portfolio/social";

export function HeroSocials() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1.25rem",
        marginTop: "2rem",
        flexWrap: "wrap",
      }}
    >
      <Link href={SOCIAL_LINKS.github}>GitHub</Link>

      <Link href={SOCIAL_LINKS.linkedin}>LinkedIn</Link>

      <Link href={SOCIAL_LINKS.codechef}>CodeChef</Link>

      <Link href={SOCIAL_LINKS.leetcode}>LeetCode</Link>
    </div>
  );
}