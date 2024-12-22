"use client";

import Image from "next/image";
import { useEffect, useState } from "react" ;

import {
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { usePracticeModal } from "@/store/use-practice-modals";



export const PracticeModal = () => {
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = usePracticeModal();

    useEffect(() => setIsClient(true), []);

  

   if (!isClient) {
    return null;
   }

  return (
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-[350px] lg:max-w-md h-[270px] lg:h-[330px] bg-white flex flex-col items-center rounded-[20px] lg:rounded-none">
          <DialogHeader>
           <div className="flex items-start w-full justify-center lg:mt-4 drop-shadow-lg">
            <Image 
            src="/heart.png" 
            alt="Heart" 
            height={100} 
            width={100}
            className="mt-[-38px]"
            />
           </div>
           <DialogTitle className="text-center lg:text-2xl">
           Practice lesson
           </DialogTitle>
           <DialogDescription className="text-center text-base lg:text-xl">
           Use practice lessons to regain hearts and points. You cannot loose harts or points in practice lessons.
           </DialogDescription>
           </DialogHeader>
           <DialogFooter className="mb-2 lg:mb-4">
           <div className="flex gap-5 gap-y-3 lg:flex-col">
             <Button
              variant="primary" 
              className="w-full lg:w-96" 
              onClick={close}>
              I understand
              </Button>
            </div>
           </DialogFooter>
        </DialogContent>
    </Dialog>
);
};