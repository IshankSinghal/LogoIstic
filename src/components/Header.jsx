import React, { useState } from "react";
import { Button } from "./ui/button";
import { Download, Save } from "lucide-react";

function Header({ DownloadIcon, SaveLogo }) {
  // Add SaveLogo as a prop
  const [textVisible, setTextVisible] = useState(false);

  return (
    <div className="p-4 shadow-xl flex justify-between items-center">
      <div className="flex items-center gap-2 group">
        <div className="h-12 w-12">
          <img
            className="transform transition-transform duration-1000 hover:rotate-[360deg] object-cover ring-2 rounded-xl ring-blue-350"
            src="/LogoIstic_LOGO.png"
            alt="Logo"
            style={{ width: "100%", height: "100%" }}
            onMouseEnter={() => setTextVisible(true)}
          />
        </div>
        <div
          className={`text-black text-lg font-semibold font-adlam font-7xl transition-opacity duration-1000 ease-in-out ${
            textVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          LOGOISTIC
        </div>
      </div>
      <div className="flex items-center justify-center gap-3">
        {/* Save Logo Button */}
        <Button
          className="h-12 w-15 flex gap-2 items-center text-[#F6ECD9] rounded-xl shadow-xl mix-blend-luminosity"
          onClick={() => SaveLogo(Date.now())} // Trigger the Save function
        >
          <Save /> Save Logo
        </Button>

        {/* Download Button */}
        <Button
          className="h-12 w-15 flex gap-2 items-center text-[#F6ECD9] rounded-xl shadow-xl mix-blend-luminosity"
          onClick={() => DownloadIcon(Date.now())}
        >
          <Download className="w-5 text-[#F6ECD9]" /> Download
        </Button>
      </div>
    </div>
  );
}

export default Header;
