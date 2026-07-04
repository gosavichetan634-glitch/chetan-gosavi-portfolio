import Image from "next/image";

export function HeroImage() {
  return (
    <Image
      src="/images/profile/profile.png"
      alt="Chetan Gosavi"
      width={420}
      height={420}
      priority
      style={{
        borderRadius: "50%",
        objectFit: "cover",
        border: "5px solid var(--color-brand-primary)",
        boxShadow: "var(--shadow-lg)",
      }}
    />
  );
}