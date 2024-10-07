import { Image, PencilRuler } from "lucide-react";
import { useState } from "react";

function SideNav({ selectedIndex }) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="py-5 shadow-xl h-screen">
      <div className="space-y-3 px-1">
        {" "}
        {/* This adds spacing between the buttons */}
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {
              setActiveIndex(index);
              selectedIndex(index);
            }}
            className={`py-2 text-lg px-3 bg-white ring-1 ring-blue-700 border-gray-400 rounded-xl text-black 
              my-1 mx-1 shadow-xl transform transition-transform hover:scale-105
              cursor-pointer flex items-center gap-2 hover:bg-blue-400 hover:text-[#F6ECD9] ${
                activeIndex == index && "bg-primary text-black"
              }`}
            key={index}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
