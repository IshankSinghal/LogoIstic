import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateContextStorage } from "../context/UpdateStorageContext";

function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#000"
  );

  const { updateStorage, setUpdateStorage } = useContext(UpdateContextStorage);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  });

  return (
    <div className="font-bold text-black text-lg py-2">
      <div className="mb-4 border-2 border-black bg-white rounded-xl py-2 px-2 shadow-lg transform transition-transform hover:scale-105">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={360}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>

      <div className="mb-4 border-2 border-black bg-white rounded-xl py-2 px-2 shadow-lg transform transition-transform hover:scale-105">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>

      <div className="mb-4 border-2 border-black bg-white rounded-xl py-2 px-2 shadow-lg transform transition-transform hover:scale-105">
        <label className="p-2 flex justify-between items-center">
          Background Color
        </label>
        <div className="flex justify-center place-items-center">
          <ColorPickerController
            hideController={false}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
}

export default BackgroundController;
