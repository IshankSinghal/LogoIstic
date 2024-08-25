import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import IconList from "./IconList";
import { UpdateContextStorage } from "../context/UpdateStorageContext";

function IconController() {
  const defaultSize = 280;
  const defaultRotate = 0;
  const defaultColor = "#000";

  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : defaultSize);
  const [rotate, setRotate] = useState(storageValue ? storageValue?.iconRotate : defaultRotate);
  const [color, setColor] = useState(storageValue ? storageValue?.iconColor : defaultColor);

  const { updateStorage, setUpdateStorage } = useContext(UpdateContextStorage);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: icon,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color, icon]);

  const handleIconSelection = (newIcon) => {
    // Reset properties when a new icon is selected
    setSize(defaultSize);
    setRotate(defaultRotate);
    setColor(defaultColor);
    setIcon(newIcon);
  };

  return (
    <div>
      <div className="font-bold text-black text-lg font-adlam">
        <div className="">
          <IconList selectedIcon={handleIconSelection} />
        </div>

        <div className="mb-4 border-2 border-black bg-white rounded-xl py-2 px-2">
          <label className="p-2 flex justify-between items-center font-adlam">
            Size <span>{size} px</span>
          </label>
          <Slider
            key={`size-${icon}`}
            className="shadow-lg transform transition-transform hover:scale-105 px-3"
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>

        <div className="mb-4 border-2 border-black rounded-xl py-2 px-2 bg-white">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} &#176;</span>
          </label>
          <Slider
            key={`size-${icon}`}
            className="shadow-lg transform transition-transform hover:scale-105 px-3 "
            defaultValue={[rotate]}
            min={-180}
            max={180}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>

        <div className="mb-4 border-2 border-black rounded-xl py-5 px-2 bg-white">
          <label className="p-2 flex justify-between items-center">
            Icon Color
          </label>
          <div className="flex justify-center place-items-center transform transition-transform hover:scale-105">
            <ColorPickerController
              hideController={true}
              selectedColor={(color) => setColor(color)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconController;
