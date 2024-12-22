import Link from "next/link"
import { Button } from "./ui/button"
import { Progress } from "./ui/progress";
import Image from "next/image";
import { quests } from "@/app/constant";

type Props = {
    points: number;
};

export const Quests = ( { points }: Props ) => {
return (
    <div className="flex flex-col border-2 rounded -xl p-4 space-y-4">
    <div className="flex items-center justify-between w-full space-y-2">
    <h3 className="font-bold text-lg">
    Quests 
    </h3>
    <Link href="/quest">
    <Button
    size="sm" variant="primaryOutline"
    >
    View all
    </Button>
    </Link>
    </div> 
    <ul className="w-full">
          {quests.map((quest) => {
            const progress = (points / quest.value) * 100;

            return ( 
            <div
            className="flex items-center w-full p-4 gap-x-4 border-t-2" 
            key={quest.title}
            >
            <Image 
            src="/gem.png" 
            alt="Points" 
            width={40} 
            height={40}
            />
            <div className="flex flex-col gap-y-2 w-full"> 
              <p className="text-neutral-700 text-xl font-bold"> 
                {quest.title} 
              </p>
            <Progress value={progress} className="text-sky-100" /> </div>
            </div>
            )
            })}
        </ul>
    </div>
);
};
    