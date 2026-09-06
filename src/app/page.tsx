import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileDock } from "@/components/layout/MobileDock";
import { Hero } from "@/components/sections/Hero";
import { MarqueeBand } from "@/components/sections/MarqueeBand";
import { Categories } from "@/components/sections/Categories";
import { TreasureHunt } from "@/components/sections/TreasureHunt";
import { DealWall } from "@/components/sections/DealWall";
import { StoreJourney } from "@/components/sections/StoreJourney";
import { BasketScene } from "@/components/sections/BasketScene";
import { Reviews } from "@/components/sections/Reviews";
import { Community } from "@/components/sections/Community";
import { Visit } from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="pb-20 md:pb-0">
        <Hero />
        <MarqueeBand />
        <Categories />
        <TreasureHunt />
        <DealWall />
        <StoreJourney />
        <BasketScene />
        <Reviews />
        <Community />
        <MarqueeBand reverse />
        <Visit />
      </main>
      <Footer />
      <MobileDock />
    </>
  );
}
