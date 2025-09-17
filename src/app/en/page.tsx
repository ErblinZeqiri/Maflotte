import Header from "@/components/Header";
import { headerEN } from "@/content/header.en";
import Hero from "@/components/Hero";
import { homeEN } from "@/content/home.en";
import Vehicles from "@/components/Vehicules";
import Devices from "@/components/Devices";
import CameraSection from "@/components/CameraSection";
import Sensor from "@/components/Sensor";
import Features from "@/components/Features";
import References from "@/components/References";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { footerEN } from "@/content/footer.en";

export default function HomeEN() {
  return (
    <main>
      <Header basePath="/en" content={headerEN} />
      <Hero basePath="/en" content={homeEN.hero} />
      <Vehicles content={homeEN.vehicles} />
      <Devices content={homeEN.devices} />
      <CameraSection
        title={homeEN.cameraSection.title}
        videoSrcMp4={homeEN.cameraSection.videoSrcMp4}
        height={homeEN.cameraSection.height}
        tabs={homeEN.cameraSection.tabs}
        imageTitles={homeEN.cameraSection.imageTitles}
      />
      <Sensor content={homeEN.sensor} />
      <Features basePath="/en" content={homeEN.features} />
      <References content={homeEN.references} />
      <About content={homeEN.about} />
      <Contact content={homeEN.contact} />
      <Footer content={footerEN} />
    </main>
  );
}