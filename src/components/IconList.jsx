import React from "react";
import iconList from "@/constants/icons";
import { useContext, useEffect, useState } from "react";
import { icons } from "lucide-react";
import { Smile } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com";

function IconList({ selectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [pngIconList, setPngIconList] = useState([]);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  useEffect(() => {
    getPngIcons();
  }, []);

  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} />;
  };

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((resp) => {
      // console.log(resp.data)
      setPngIconList(resp.data);
    });
  };

  return (
    <div>
      <div className="">
        <div className="px-2">

          <label>Icon</label>
        </div>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-2 cursor-pointer bg-white rounded-xl border-2 border-black w-[50px] h-[50px] 
                      my-2 flex items-center justify-center shadow-lg transform transition-transform hover:scale-105"
        >
          {icon?.includes(".png") ? (
            <img src={BASE_URL + "/png/" + icon} />
          ) : (
            <Icon name={icon} color={"#000"} size={20} />
          )}
        </div>
      </div>
      <div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Pick Your Image...</DialogTitle>
              <DialogDescription>
                <Tabs defaultValue="icons" className="w-[400px]">
                  <TabsList>
                    <TabsTrigger className="transform transition-transform hover:scale-105" value="01_Icons">01_Icons</TabsTrigger>
                    <TabsTrigger className="transform transition-transform hover:scale-105" value="02_Icons">02_Icons</TabsTrigger>
                  </TabsList>
                  <TabsContent value="01_Icons">
                    <div
                      className="background-color:  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto
                  gap-4  h-[400px] p-6"
                    >
                      {iconList.map((item, index) => (
                        <div
                          className="border-2 bg-white p-2 flex rounded-xl items-center justify-center cursor-pointer"
                          onClick={() => {
                            selectedIcon(item);
                            setOpenDialog(false);
                            setIcon(item);
                          }}
                        >
                          <Icon name={item} color={"#000"} size={20} />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="02_Icons">
                    <div
                      className="background-color:  grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 overflow-auto
                  gap-4 h-[400px] p-6"
                    >
                      {pngIconList.map((item, index) => (
                        <div
                          className="border p-2 bg-white flex rounded-xl items-center justify-center cursor-pointer"
                          onClick={() => {
                            selectedIcon(item);
                            setOpenDialog(false);
                            setIcon(item);
                          }}
                        >
                          <img src={BASE_URL + "/png/" + item} />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default IconList;
