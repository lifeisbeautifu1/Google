import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MicrophoneIcon, XIcon, SearchIcon } from '@heroicons/react/solid';

import { Avatar, HeaderOptions } from './index';

const Header = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState(router.query.term);
  const handleSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchTerm) return;
    router.push(`/search?term=${searchTerm}`);
  };
  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex items-center p-6 w-full'>
        <Image
          height={40}
          width={120}
          onClick={() => router.push('/')}
          alt='Google'
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          className='cursor-pointer'
        />
        <form
          onSubmit={handleSumbit}
          className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            className='flex-grow w-full focus:outline-none'
          />
          <XIcon
            onClick={() => setSearchTerm('')}
            className='h-7 sm:mr-3 cursor-pointer text-gray-500 transition duration-100 transform hover:scale-125'
          />
          <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
          <SearchIcon className='h-6 text-gray-500 hidden sm:inline-flex cursor-pointer' />
        </form>
        <Avatar className='ml-auto' url='https://coaching.papareact.com/ai9' />
      </div>
      <HeaderOptions />
    </header>
  );
};

export default Header;
