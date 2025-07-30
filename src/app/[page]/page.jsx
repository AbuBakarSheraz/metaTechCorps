'use client';
import { useParams } from 'next/navigation';
import bgimg from './page-header-bg.jpg'; // make sure the path is correct
import Header from '../components/Header';
import ContactUs from '../components/ContactUs';
import Aboutagency from '../components/Aboutagency';
import Slider from '../components/Slider';
import Lwt from '../components/Lwt';
import Services from "../components/Services";
import DigitalSuccessComponent from "../components/DigitalSuccess";
import ChooseUs from "../components/ChooseUs";
import Benefits from "../components/Benefits";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";

export default function DynamicPage() {
  const params = useParams();
  const slug = params.page;

  return (
    <>
    <div
      className=""
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      <Header />
      <hr class="h-[0.5px] bg-blend-darken border-0" />
      <div className='h-[45vh] w-full flex flex-col items-center justify-center'>
      <h1 className="text-white text-3xl font-bold capitalize">
        {slug?.replace('-', ' ')}
      </h1>
      <h2>Home * <span className='text-mtc-red'>{slug?.replace('-', ' ')}</span></h2>
      </div>
    </div>
    <Slider/>
    <ContactUs />
    <Aboutagency />
    <Services />
    <DigitalSuccessComponent />
    <ChooseUs />
    <Benefits />
    <JoinUs />
    <Lwt />
    <Footer />

    </>
  );
}
