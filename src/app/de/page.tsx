import Header from "@/components/Header";
import { headerDE } from "@/content/header.de";

import Hero from "@/components/Hero";
import { homeDE } from "@/content/home.de";
import Features from "@/components/Features";
import Vehicles from "@/components/Vehicules";
import Devices from "@/components/Devices";
import CameraSection from "@/components/CameraSection";
import Sensor from "@/components/Sensor";
import References from "@/components/References";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { footerDE } from "@/content/footer.de";


export default function HomeDE() {
  return (
    <main>
      <Header basePath="/de" content={headerDE} />
      <Hero basePath="/de" content={homeDE.hero} />
      <Features basePath="/de" content={homeDE.features} />
      <Vehicles content={homeDE.vehicles} />
      <Devices content={homeDE.devices} />
      <CameraSection
        {...homeDE.cameraSection}
        height="md"     
        videoSrcMp4="/videos/camera_camion.mp4"
        className="pb-12 md:pb-16"
      />
      <Sensor content={homeDE.sensor} />
      <References content={homeDE.references} />
      <About content={homeDE.about} />
      <Contact content={homeDE.contact} />
      <Footer content={footerDE} />
    </main>
  );
}
