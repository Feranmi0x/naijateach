"use client";

import Image from "next/image";
import { useRouter } from "next/navigation"; 
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
import { useHeartsModal } from "@/store/use-hearts-modals";



export const HeartsModal = () => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);
    const { isOpen, close } = useHeartsModal();

useEffect (() => setIsClient(true), []);

  const onClick = () => {
  close();
  router.push("/store");
  };

   if (!isClient) {
    return null;
   }

  return (
      <Dialog open={isOpen} onOpenChange={close}>
        <DialogContent className="max-w-[350px] lg:max-w-md h-[230px] lg:h-[310px] bg-white flex flex-col items-center rounded-[20px] lg:rounded-none">
          <DialogHeader>
           <div className="flex items-start w-full justify-center lg:mt-4 drop-shadow-lg">
            <Image src="/sadface.png" alt="Sad" 
            height={80} 
            width={80}
            className="mt-[-38px]"
            />
           </div>
           <DialogTitle className="text-center lg:text-2xl">
           You ran out of hearts!
           </DialogTitle>
           <DialogDescription className="text-center text-base lg:text-xl">
            Get Pro for unlimited hearts, or purchase them in the store.
           </DialogDescription>
           </DialogHeader>
           <DialogFooter className="mb-2 lg:mb-4">
           <div className="flex gap-5 gap-y-3 lg:flex-col">
             <Button
              variant="primary" 
              className="w-full 
              lg:w-96" 
              onClick={onClick}>
              Get Unlimited hearts
              </Button>
              <Button
                 variant="dangerOutline"
                 className="w-full"
                 onClick={close}
              >     
             No Thanks
              </Button> 
            </div>
           </DialogFooter>
        </DialogContent>
    </Dialog>
);
};