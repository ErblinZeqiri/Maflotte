import Header from "@/components/Header";
import { headerDE } from "@/content/header.de";
import Hero from "@/components/Hero";
import { homeDE } from "@/content/home.de";
import Vehicles from "@/components/Vehicules";
import Devices from "@/components/Devices";
import CameraSection from "@/components/CameraSection";
import Sensor from "@/components/Sensor";
import Features from "@/components/Features";
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
      <Vehicles content={homeDE.vehicles} />
      <Devices content={homeDE.devices} />
      <CameraSection
        title={homeDE.cameraSection.title}
        videoSrcMp4={homeDE.cameraSection.videoSrcMp4}
        height={homeDE.cameraSection.height}
        tabs={homeDE.cameraSection.tabs}
        imageTitles={homeDE.cameraSection.imageTitles}
      />
      <Sensor content={homeDE.sensor} />
      <Features basePath="/de" content={homeDE.features} />
      <References content={homeDE.references} />
      <About content={homeDE.about} />
      <Contact content={homeDE.contact} />
      <Footer content={footerDE} />
    </main>
  );
}
