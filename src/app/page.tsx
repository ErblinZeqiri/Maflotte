import Header from "@/components/Header";
import { headerFR } from "@/content/header.fr";
import Hero from "@/components/Hero";
import { homeFR } from "@/content/home.fr";
import Vehicles from "@/components/Vehicules";
import Devices from "@/components/Devices";
import CameraSection from "@/components/CameraSection";
import Sensor from "@/components/Sensor";
import Features from "@/components/Features";
import References from "@/components/References";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { footerFR } from "@/content/footer.fr";

export default function Home() {
  return (
    <main>
      <Header basePath="" content={headerFR} />
      <Hero basePath="" content={homeFR.hero} />
      <Vehicles content={homeFR.vehicles} />
      <Devices content={homeFR.devices} />
      <CameraSection
        title={homeFR.cameraSection.title}
        videoSrcMp4={homeFR.cameraSection.videoSrcMp4}
        height={homeFR.cameraSection.height}
        tabs={homeFR.cameraSection.tabs}
        imageTitles={homeFR.cameraSection.imageTitles}
        className="pb-12 md:pb-16"
      />
      <Sensor content={homeFR.sensor} />
      <Features basePath="" content={homeFR.features} />
      <References content={homeFR.references} />
      <About content={homeFR.about} />
      <Contact content={homeFR.contact} />
      <Footer content={footerFR} />
    </main>
  );
}
