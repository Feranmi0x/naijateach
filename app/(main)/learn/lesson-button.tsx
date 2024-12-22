"use client"

import { BadgeCheck, Crown, BookOpen } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


type Props = {
id: number;
index: number;
totalCount: number;
locked?: boolean;
current?: boolean;
percentage: number;
};

export const LessonButton = ({
    id, 
    index, 
    totalCount, 
    locked, 
    current, 
    percentage
}: Props) => {

    const cycleLength = 8;
    const cycleIndex = index % cycleLength;
    let indentationLevel;
     if (cycleIndex <= 2) {
    indentationLevel = 0;
    } else if (cycleIndex <= 4) {
    indentationLevel = 0;
    } else if (cycleIndex <= 6) {
    indentationLevel = 0;
    } else {
    indentationLevel = 0;
    }
    const rightPosition = indentationLevel * 40;

    const isFirst = index === 0;
    const isLast = index === totalCount;
    const isCompleted = !current && !locked;
    const Icon = isCompleted ? BadgeCheck : isLast ? Crown: BookOpen;
    const href = isCompleted ? `/lesson/${id}` : "/lesson";
     
    return ( 
        <Link
        href={href} 
        aria-disabled={locked}
        style={{ pointerEvents: locked ? "none" : "auto" }}
        >
        <div className="relative"
        style={{
        right: `${rightPosition}px`,
        marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
        >
        {current ? (
       <div className="relative"> 
       <div className="absolute h-[30px] flex items-center -top-6 left-2.5 px-3 py-2.5 border-2 font-bold uppercase text-sm text-yelloww bg-white animate-bounce tracking-wide z-10">
       Begin 
       <div
        className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2"
        />
       </div> 
            <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className="h-[60px] w-[60px] border-b-4 bg-black"
            >    
            <Icon 
            className={cn("h-10 w-10",
            locked
            ? "fill-neutral-400 text-neutral-400" : "fill-primary-foreground text-primary-foreground", isCompleted && "fill-none stroke-[4]"
             )}
            />
            </Button>
            <Progress
        value={Number.isNaN (percentage) ? 0 : percentage}
        className="w-[60px] bg-black text-green-600"
        />
        </div>
        ) : (
            <Button
                size="rounded"
                variant={locked ? "locked" : "secondary"}
                className="h-[60px] w-[60px] border-b-4"
            >    
            <Icon 
            className={cn("h-10 w-10",
            locked
            ? "fill-neutral-400 text-neutral-400" : "fill-primary-foreground text-primary-foreground", isCompleted && "fill-none stroke-[4]"
             )}
            />
            </Button>
        )}
        </div>
      </Link> 
    );
}