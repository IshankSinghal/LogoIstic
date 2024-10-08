import { useState } from "react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/BackgroundController";
import IconController from "./components/IconController";
import LogoPreview from "./components/LogoPreview";
import "./App.css";
import { UpdateContextStorage } from "./context/UpdateStorageContext";
import SaveLogo from "./components/SaveLogo";
import html2canvas from "html2canvas";

function App() {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  const [savedLogos, setSavedLogos] = useState([]);

  const handleSavedLogos = () => {
    const savedLogoElement = document.getElementById("downloadLogo");
    
    // Use html2canvas to capture the logo element and store it as an image
    html2canvas(savedLogoElement, {
      backgroundColor: null,
    }).then((canvas) => {
      const savedLogo = canvas.toDataURL("image/png");
      setSavedLogos((prevLogos) => [...prevLogos, savedLogo]); // Save logo
    });

  };

  return (
    <UpdateContextStorage.Provider value={{ updateStorage, setUpdateStorage }}>
      <div className=" min-h-screen flex flex-col bg-gradient-to-r from-blue-300 to-blue-700">
        <Header DownloadIcon={setDownloadIcon} SaveLogo={handleSavedLogos}/>

        <div className="flex flex-grow">
          <div className="bg-blue-300 w-64 h-full fixed font-semibold">
            <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
          </div>

          <div className=" ml-64 flex-grow grid grid-cols-1 md:grid-cols-9 ">
            <div className="md:col-span-3 shadow-xl p-5 bg-blue-500">
              {selectedIndex == 0 ? (
                <IconController />
              ) : (
                <BackgroundController />
              )}
            </div>

            <div className=" md:col-span-4  bg-blue-600 shadow-xl">
              <LogoPreview
                downloadIcon={downloadIcon}
                onSave={handleSavedLogos}
              />
            </div>

            <div className="bg-blue-700 md:col-span-2 h-full ">
              <SaveLogo savedLogos={savedLogos} />
            </div>
          </div>
        </div>
      </div>
    </UpdateContextStorage.Provider>
  );
}

export default App;
