import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import SideNav from "./components/SideNav"
import BackgroundController from "./components/BackgroundController";
import IconController from "./components/IconController";
import LogoPreview from "./components/LogoPreview";
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { UpdateContextStorage } from './context/UpdateStorageContext';

function App() {
  const [count, setCount] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage,setUpdateStorage] = useState({});
  const [downloadIcon,setDownloadIcon] = useState();

  return (
    <UpdateContextStorage.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className='bg-white min-h-screen flex flex-col'>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="flex flex-grow">
          <div className="w-64 fixed h-full">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>
          <div className="ml-64 flex-grow grid grid-cols-1 md:grid-cols-6">
            <div className="md:col-span-2 border shadow-sm p-5 overflow-auto">
              {selectedIndex == 0 ? <IconController /> : <BackgroundController />}
            </div>
            <div className="md:col-span-3">
              <LogoPreview downloadIcon={downloadIcon} />
            </div>
            <div className="bg-blue-100 md:col-span-1 h-full">Ads Banner</div>
          </div>
        </div>
      </div>
    </UpdateContextStorage.Provider>
  )
} 

export default App
