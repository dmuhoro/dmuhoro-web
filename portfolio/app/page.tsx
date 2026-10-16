import Hero from "@/components/hero";
import About from "@/components/about";
import WhatIdo from "@/components/what-i-do";
import SelectedWork from "@/components/selected-work";
import Process from "@/components/process";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIdo />
      <SelectedWork />
      <Process />
      <Contact />
    </>
  );
}
