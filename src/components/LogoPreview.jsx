import { icons } from "lucide-react";
import { UpdateContextStorage } from "../context/UpdateStorageContext";
import { useContext, useEffect, useState } from "react";
import html2canvas from "html2canvas";

const BASE_URL='https://logoexpress.tubeguruji.com'

function LogoPreview({downloadIcon}) {

    const [storageValue,setStorageValue] = useState();
    const {updateStorage,setUpdateStorage} = useContext(UpdateContextStorage);
    
    useEffect(()=>{
        const storageData = JSON.parse(localStorage.getItem('value'));
        // console.log(storageData?.bgRounded);
        setStorageValue(storageData);
    },[updateStorage])

    useEffect(()=>{
        if(downloadIcon){
            downloadPngLogo();
        }
    },[downloadIcon])

    const downloadPngLogo=()=>{
        const downloadDiv = document.getElementById("downloadLogo")
        html2canvas(downloadDiv,{
            backgroundColor:null
        }).then(canvas=>{
            const pngImg = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = pngImg
            downloadLink.download='LogoIstic_LOGO.png';
            downloadLink.click();
        })
    }

    const Icon = ({name,color, size, rotate}) =>{
        const LucidIcon = icons[name];
        if(!LucidIcon){
            return;
        }
        return <LucidIcon color={color} size={size} style={{
            transform:`rotate(${rotate}deg)`,
        }}/>
    }

    return (
      <div className=" flex items-center justify-center h-screen w-full">
          <div className=" h-[450px] w-[450px] bg-gray-200 outline-dotted outline-gray-300" style={{
            padding:storageValue?.bgPadding,
          }}>
              <div id='downloadLogo' className=" h-full w-full flex items-center justify-center" 
              style={{
                        borderRadius:storageValue?.bgRounded || "0px",
                        background:storageValue?.bgColor,
                    }}
            > 
            {storageValue?.icon?.includes('.png')? <img src={BASE_URL+'/png/'+storageValue.icon}
                style={{
                    height:storageValue?.iconSize,
                    width:storageValue?.iconSize,
                    // rotate:
                }}
            />:
            <Icon name={storageValue?.icon || 0}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
            />  }    
                     
              </div>
          </div>
      </div>
    )
  }
  
  export default LogoPreview
  