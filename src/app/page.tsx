import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppScreen from "@/components/sections/AppScreen";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Features />
      <AppScreen />
    </main>
  );
}
