import { MainLayout } from "@/components/layout";
import { Navbar } from "@/components/navigation";

export default function HomePage() {
  return (
    <MainLayout>
      <Navbar />

      <main
        style={{
          padding: "4rem 2rem",
        }}
      >
        <h1>AI Engineer Portfolio Platform</h1>
      </main>
    </MainLayout>
  );
}