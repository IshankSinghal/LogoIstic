import { useContext, useEffect, useState } from "react"
import { Slider } from "./ui/slider"
import ColorPickerController from "./ColorPickerController";
import { UpdateContextStorage } from "../context/UpdateStorageContext";


function BackgroundController() {
  const storageValue = JSON.parse(localStorage.getItem('value'));

  const [rounded, setRounded] = useState(storageValue?storageValue?.bgRounded:0)
  const [padding, setPadding] = useState(storageValue?storageValue?.bgPadding:0)
  const [color,setColor] = useState(storageValue?storageValue?.bgColor:'#000');

  const {updateStorage,setUpdateStorage} = useContext(UpdateContextStorage);

  useEffect(() => {
    const updatedValue={
      ...storageValue,
      bgRounded: rounded,
      bgPadding:padding,
      bgColor: color
    }
    setUpdateStorage(updatedValue);
    localStorage.setItem('value',JSON.stringify(updatedValue))
    
  })

  return (
    <div>
      <div className=" py-2">
        <label className=" p-2 flex justify-between items-center text-black border-2">Rounded <span>{rounded}</span></label>
        <Slider defaultValue={[rounded]} max={360} step={1} onValueChange={(event) => setRounded(event[0])}/>
      </div>
      <div className=" py-2">
        <label className=" p-2 flex justify-between items-center text-black border-2">Padding <span>{padding}</span></label>
        <Slider defaultValue={[padding]} max={100} step={1} onValueChange={(event) => setPadding(event[0])}/>
      </div>
      <div className=" py-2">
        <label className=" p-2 flex justify-between items-center">Background Color</label>
        <ColorPickerController hideController={false} selectedColor={(color) => setColor(color)} />
      </div>
    </div>
  )
}

export default BackgroundController
