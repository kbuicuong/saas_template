import React from "react";
import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Features from "./sections/Features.tsx";
import Pricing from "./sections/Pricing.tsx";

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
      <Pricing />
    </main>
  );
};

export default App;
