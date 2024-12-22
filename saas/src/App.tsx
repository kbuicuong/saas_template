import React from "react";
import Header from "./sections/Header.tsx";
import Hero from "./sections/Hero.tsx";
import Features from "./sections/Features.tsx";

const App = () => {
  return (
    <main className="overflow-hidden ">
      <Header />
      <Hero />
      <Features />
    </main>
  );
};

export default App;
