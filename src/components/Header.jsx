import React from 'react'
import { Button } from "./ui/button"
import { Download } from 'lucide-react'

function Header({DownloadIcon}) {
  return (
    <div className='p-4 shadow-sm border flex justify-between items-center'>        
        <img className='h-12 w-12' src='/logo.png'/> 
        <Button className=" flex gap-2 items-center text-[#F6ECD9]" onClick={()=> DownloadIcon(Date.now())}>
          <Download className=" h-4 w-4 text-[#F6ECD9]"/> Download</Button>     
    </div>
  )
}

export default Header