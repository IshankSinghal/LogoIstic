import React from 'react'
import { Button } from "./ui/button"
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>        
        <img
        className=' h-12 w-15 transform transition-transform duration-300 hover:rotate-180 animate-spin-slow'
        src='/logo.png'
        alt='Logo'
      />
      <div>
        ishnak
      </div>
        <Button className=" h-12 w-15 flex gap-2 items-center text-[#F6ECD9] rounded-xl" onClick={()=> DownloadIcon(Date.now())}>
          <Download className="w-5 text-[#F6ECD9]"/> Download</Button>     
    </div>
  )
}

export default Header