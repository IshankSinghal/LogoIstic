import React from "react";
import iconList from "@/constants/icons";
import { useContext, useEffect, useState } from "react";
import { icons } from "lucide-react";
import { Smile } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import axios from "axios";

const BASE_URL='https://logoexpress.tubeguruji.com'

function IconList({selectedIcon}) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem('value'));
  const [pngIconList,setPngIconList] = useState([]);
  const [icon,setIcon]= useState(storageValue?storageValue?.icon:'Smile')

  useEffect(()=>{
    getPngIcons();
    
  },[])

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = ()=>{
    axios.get(BASE_URL+'/getIcons.php').then(resp=>{
      // console.log(resp.data)
      setPngIconList(resp.data)
    })
  }

  return (
    <div>
      <div>
        <label>Icon</label>
        <div onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] my-2 flex items-center justify-center">
          {icon?.includes('.png')?
          <img src={BASE_URL + '/png/' + icon}/>: <Icon name={icon} color={"#000"} size={20} />
        }
          
        </div>
      </div >
      <div >
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle  >Pick Your Icon...</DialogTitle>    
            <Tabs defaultValue="icons" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="01_Icons">01_Icons</TabsTrigger>
                  <TabsTrigger value="02_Icons">02_Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="01_Icons">
                <div className="background-color: bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
                gap-4 overflow-auto h-[400px] p-6">
                {iconList.map((item, index) => 
                   <div className="border p-3 flex rounded-md items-center justify-center cursor-pointer"
                    onClick={()=> {selectedIcon(item); setOpenDialog(false); setIcon(item)}}
                   >
                    <Icon name={item} color={"#000"} size={20} />
                   </div>
                  )
                }
              </div>
                </TabsContent>
                <TabsContent value="02_Icons">
                <div className="background-color: bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 
                gap-4 overflow-auto h-[400px] p-6">
                {pngIconList.map((item, index) => 
                   <div className="border p-3 flex rounded-md items-center justify-center cursor-pointer"
                    onClick={()=> {selectedIcon(item); setOpenDialog(false); setIcon(item)}}
                   >
                    <img src={BASE_URL+"/png/"+item} />
                   </div>
                  )
                }
              </div>
                </TabsContent>
              </Tabs>
              </DialogHeader>
        </DialogContent>
      </Dialog>
      </div>
    </div>
  );
}

export default IconList;