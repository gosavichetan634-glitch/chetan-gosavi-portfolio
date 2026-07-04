import { Button } from "@/components/ui";

export function HeroButtons() {
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginTop: "1rem",
      }}
    >
      <Button
        href="/contact"
        variant="primary"
      >
        Hire Me
      </Button>

      <Button
        href="/resume"
        variant="secondary"
      >
        Download Resume
      </Button>
    </div>
  );
}