import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";



function SideNav({selectedIndex}) {
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
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className=" border shadow-sm h-screen">
      <div className="">
        {menuList.map((menu, index) => (
          <h2
            onClick={() => {setActiveIndex(index);selectedIndex(index)}}
            className= {`p-2 text-lg px-3 text-gray-500 my-1 mx-1 cursor-pointer flex items-center gap-2 hover:bg-primary hover:text-[#F6ECD9] ${activeIndex==index&&'bg-primary text-white'}`}
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
