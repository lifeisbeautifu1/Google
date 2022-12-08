import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';

import { Avatar, Footer } from '../components';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col items-center  h-screen'>
      <Head>
        <title>Google clone</title>
      </Head>
      <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>
          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer' />
          <Avatar url='https://coaching.papareact.com/ai9' />
        </div>
      </header>
      <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
        <Image
          height={100}
          width={300}
          alt='Google'
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
        />
        <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md sm:max-w-xl lg:max-w-2xl border border-gray-200 px-5 py-3 items-center rounded-full'>
          <SearchIcon className='h-5 mr-3 text-gray-500' />
          <input type='text' className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5 ' />
        </div>
        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button className='btn'>Google Search</button>
          <button className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Home;
