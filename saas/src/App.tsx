import React from "react";
import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Features from "./sections/Features.tsx";
import Pricing from "./sections/Pricing.tsx";
import Faq from "./sections/Faq.tsx";
import Testimonials from "./sections/Testimonials.tsx";
import Download from "./sections/Download.tsx";

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Faq />
      <Testimonials />
      <Download />
    </main>
  );
};

export default App;
