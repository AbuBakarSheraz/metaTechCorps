import Image from "next/image";
import Herosection from "./sections/Herosection";
import Slider from "./components/Slider";
import Aboutagency from "./components/Aboutagency";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
    <Herosection />
    <Slider/>
    <Aboutagency />
    <Services />
  
         
    </>
  );
}
