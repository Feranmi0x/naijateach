import { Progress } from "@/components/ui/progress";
import { useExitModal } from "@/store/use-exit-modal";
import { InfinityIcon, X } from "lucide-react";
import Image from "next/image";

type Props = {
    hearts: number;
    percentage: number;
    hasActiveSubscription: boolean;
};
    export const Header = ({
    hearts, 
    percentage, 
    hasActiveSubscription,
    }: Props) => {
        const { open } = useExitModal();
    return ( 
        <header className="lg:pt-[50px] pt-[20px] max-w-[1140px] mx-auto w-full bg-bluee sticky top-0">
        <div className="flex items-center justify-between">   
        <X
        onClick={open}
        className="text-gray-800 hover:opacity-75 transition cursor-pointer ml-3"
        />
        <div className="text-rose-500 flex items-center font-extrabold mr-5">
        <Image 
        src="/heart.png" 
        height={45} 
        width={45} 
        alt="Heart"
        />
       {hasActiveSubscription
       ? <InfinityIcon className="h-6 w-6 stroke-[3] shrink-0"/> 
       : hearts
       }
       </div>
       </div> 
       <Progress value={percentage} />
        </header>
     );
    };