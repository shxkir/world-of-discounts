"use client";

import { Aisle, CategoryRibbon } from "@/components/aisle";
import { Footer, Header, MobileDock, SkipLink } from "@/components/chrome";
import { Reviews, ShelfStory, Story } from "@/components/community";
import { DealWall } from "@/components/deals";
import { Hero } from "@/components/hero";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Visit } from "@/components/visit";

export function StoreExperience() {
  return (
    <SmoothScroll>
      <main>
        <SkipLink />
        <Header />
        <Hero />
        <div id="main-content">
          <DealWall />
          <Aisle />
          <CategoryRibbon />
          <ShelfStory />
          <Story />
          <Reviews />
          <Visit />
        </div>
        <Footer />
        <MobileDock />
      </main>
    </SmoothScroll>
  );
}
