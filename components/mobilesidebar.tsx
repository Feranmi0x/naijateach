import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Sidebar } from "@/components/sidebar"

export const MobileSideBar = () => {
    return (
       <Sheet>
        <SheetTrigger>
            <Menu className="text-white"></Menu>
        </SheetTrigger>
        <SheetContent className="w-full p-0 z-[100]" side="left">
            <Sidebar className="" />
        </SheetContent>
       </Sheet>
    );
};