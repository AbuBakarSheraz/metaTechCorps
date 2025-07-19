'use client';
import { useParams } from 'next/navigation';
import bgimg from './page-header-bg.jpg'; // make sure the path is correct
import Header from '../components/Header';

export default function DynamicPage() {
  const params = useParams();
  const slug = params.page;

  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${bgimg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '470px',
      }}
    >
      <Header />
      <hr class="h-[0.5px] bg-gray-300 border-0" />
      <div className='h-[45vh] w-full flex flex-col items-center justify-center'>
      <h1 className="text-white text-3xl font-bold capitalize">
        {slug?.replace('-', ' ')}
      </h1>
      <h2>Home * <span className='text-mtc-red'>{slug?.replace('-', ' ')}</span></h2>
      </div>
    </div>
  );
}
