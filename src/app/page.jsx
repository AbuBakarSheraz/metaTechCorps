import Image from "next/image";
import Herosection from "./sections/Herosection";
import Slider from "./components/Slider";
import Aboutagency from "./components/Aboutagency";
import Services from "./components/Services";
import DigitalSuccessComponent from "./components/DigitalSuccess";
import ChooseUs from "./components/ChooseUs";
import Benefits from "./components/Benefits";
import JoinUs from "./components/JoinUs";
import Lwt from "./components/Lwt";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";



export default function Home() {
  return (
    <>
    <Herosection />
    <Slider/>
    <div className="bg-gradient-to-br from-gray-900 via-black to-gray-800">
    <Aboutagency />
    <Services />
    <DigitalSuccessComponent />
    <ChooseUs />
    <Benefits />
    <JoinUs />
    <Lwt />
    <ContactUs />
    <Footer />
    </div>  
         
    </>
  );
}
