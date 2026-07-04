import { Button } from "@/components/ui";

export function NavbarActions() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Button
        href="/resume"
        variant="secondary"
      >
        Resume
      </Button>

      <Button
        href="/contact"
        variant="primary"
      >
        Hire Me
      </Button>
    </div>
  );
}