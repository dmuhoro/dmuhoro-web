import Hero from "@/components/hero";
import Services from "@/components/services";
import Process from "@/components/process";
import Why from "@/components/why";
import SelectedWork from "@/components/selected-work";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Why />
      <SelectedWork />
      <Contact />
    </>
  );
}
