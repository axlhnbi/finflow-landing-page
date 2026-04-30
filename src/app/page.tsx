import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import AppScreen from "@/components/sections/AppScreen";
import ActiveSectionObserver from "@/components/shared/ActiveSectionObserver";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <ActiveSectionObserver />
      <Hero />
      <Features />
      <AppScreen />
    </main>
  );
}
