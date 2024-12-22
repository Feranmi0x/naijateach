import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";
import { courses } from "@/db/schema";

type Props = {
    activeCourse: typeof courses.$inferSelect;
    hearts: number;
    points: number;
    hasActiveSubscription: boolean;
};

export const UserProgress = ({ 
    activeCourse,
    hearts,
    points,
    hasActiveSubscription,
}: Props) => {
    return (
        <div className="flex items-center justify-between gap-x-2 w-full">
            <Link href="/courses">
               <Button variant="ghost" className="mt-[-10px]">
                <Image src={activeCourse.imageSrc} alt={activeCourse.title} height={38} width={38} className="rounded-md" />
               </Button>
            </Link>
            <Link href="/shop">
               <Button variant="ghost" className="text-sky-400 font-extrabold ">
                <Image src="/gem.png" alt="gems" height={25} width={30} className="rounded-md mt-[-10px]" />
                {points}
               </Button>
            </Link>
            <Link href="/shop">
               <Button variant="ghost" className="text-red-500 font-extrabold">
                <Image src="/heart.png" alt="points" height={50} width={50} className="rounded-md font-extrabold text-2xl" />
                {hasActiveSubscription ? <InfinityIcon className="h-4 w-4 stroke-[3]" /> : hearts}
               </Button>
            </Link>
        </div>
    );
};