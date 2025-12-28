import { Header } from "@/app/components/layout/Header";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { Services } from "@/app/components/sections/Services";
import { ServiceTypes } from "@/app/components/sections/ServiceTypes";
import { ServicesMarquee } from "@/app/components/sections/ServicesMarquee";
import { MembersClub } from "@/app/components/sections/MembersClub";
import { Process } from "@/app/components/sections/Process";
import { FAQ } from "@/app/components/sections/FAQ";
import { Partners } from "@/app/components/sections/Partners";
import { Contact } from "@/app/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MembersClub />
        <Services />
        <ServiceTypes />
        <ServicesMarquee />
        <Process />
        <FAQ />
        <Contact />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
