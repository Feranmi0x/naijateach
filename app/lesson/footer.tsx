import { useKey, useMedia } from "react-use";
import { CheckCircle, XCircle } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {
onCheck: () => void;
status: "correct" | "wrong" | "none" | "completed";
disabled?: boolean; 
lessonId?: number;
};

export const Footer = ({
    onCheck, 
    status, 
    disabled, 
    lessonId,
    }: Props) => {
        useKey("Enter", onCheck, {}, [onCheck]);
        const isMobile = useMedia("(max-width: 1024px)");

  // Example usage (this could be inside buttons or event handlers in your main page)
  
  

        // const Array = ["Nicely done!", "Excellent!", "Perfect!", "Great!"];

        // const mathR = () => {
        //     const randI = Math.floor(Math.random() * Array.length);
        //     return randI;
        // }
        // const wrongArray = ["Nicely done!", "Excellent!", "Perfect!", "Great!"];

        // const mathR = () => {
        //     const wronhrandI = Math.floor(Math.random() * wrongArray.length);
        //     return randI;
        // }
    return ( 
        <footer className={cn(
            "lg:h-[140px] h-[100px] border-t-2 fixed bottom-0 w-full",
            status === "correct" && "border-transparent bg-green-100", 
            status === "wrong" && "border-transparent bg-rose-100",
            )}>
            <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
            {status === "correct" && (
            <div className="text-green-500 font-bold text-base lg:text-2xl flex items-center sticky bottom-0">
                <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4" />
                Nicely done!
                </div>
            )}
            {status === "wrong" && ( 
                <div className="text-rose-500 font-bold text-base lg:text-2xl flex items-center">
                <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
                Try again.
                </div>
            )}
            {status === "completed" && (
                <Button 
                variant="secondary2"
                size={isMobile ? "sm" : "lg"}
                onClick={() => window.location.href = `/lesson/${lessonId}`}
                >
                Practice again
                </Button>
            )}
            <Button
            disabled={disabled} 
            className="ml-auto h-12" 
            onClick={onCheck}
            size={isMobile ? "sm" : "lg"}
            variant={status === "wrong" ? "danger" : "secondary2"}
            >
            {status === "none" && "check"}
            {status === "correct" && "Next"}
            {status === "wrong" && "Retry"}
            {status === "completed" && "Continue"}
            </Button> 
            </div>
        </footer>    
    );
};