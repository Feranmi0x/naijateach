"use client"

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger onClick={() => setIsOpen(true)}>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="w-full p-0 z-[100]" side="left">
        <Sidebar className="" onClose={() => setIsOpen(false)} />
      </SheetContent>
    </Sheet>
  );
};