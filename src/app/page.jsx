import Image from "next/image";
import Herosection from "./sections/Herosection";
import Slider from "./components/Slider";
import Aboutagency from "./components/Aboutagency";
import Services from "./components/Services";
import DigitalSuccessComponent from "./components/DigitalSuccess";
import ChooseUs from "./components/ChooseUs";


export default function Home() {
  return (
    <>
    <Herosection />
    <Slider/>
    <div className="bg-gray-900">
    <Aboutagency />
    <Services />
    <DigitalSuccessComponent />
    <ChooseUs />
    </div>  
         
    </>
  );
}
