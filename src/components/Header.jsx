import React, { useState } from 'react';
import { Button } from "./ui/button";
import { Download } from 'lucide-react';

function Header({ DownloadIcon }) {
  const [textVisible, setTextVisible] = useState(false);

  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>
      <div
        className='flex items-center gap-2 group'
        onMouseEnter={() => setTextVisible(true)}
      >
        <div className='h-12 w-12'>
          <img
            className=' transform transition-transform duration-300 hover:rotate-[360deg] objest-cover'
            src='/Logo.png'
            alt='Logo'
          />
        </div>
        <div className={`text-black text-lg font-semibold transition-opacity duration-1000 ease-in-out ${textVisible ? 'opacity-100' : 'opacity-0'}`}>
          LOGOISTIC
        </div>
      </div>
      <Button className="h-12 w-15 flex gap-2 items-center text-[#F6ECD9] rounded-xl" onClick={() => DownloadIcon(Date.now())}>
        <Download className="w-5 text-[#F6ECD9]" /> Download
      </Button>
    </div>
  );
}

export default Header;
