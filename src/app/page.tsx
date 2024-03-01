import HeroSection from "@/components/HeroSection";
import VehicleRepairing from "@/components/VehicleRepairing";



export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white">
   <h1 className="text-2xl text-center "></h1>
   <HeroSection />
   <VehicleRepairing />

   </main>
  );
}
