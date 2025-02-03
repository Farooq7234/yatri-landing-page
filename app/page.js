import Choose from "@/components/Choose";
import { FAQ } from "@/components/FAQ";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OneWayClub from "@/components/OneWayClub";
import Service from "@/components/Service";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Service />
      <Choose />
      <OneWayClub />
      <FAQ />
      <Footer />
    </>
  );
}
