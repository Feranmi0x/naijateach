"use client"

import { refillHearts } from "@/app/actions/user-progress";
import { createStripeUrl } from "@/app/actions/user.subscription";
import { POINTS_TO_REFILL } from "@/app/constant";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useTransition } from "react";
import toast from "react-hot-toast";

type Props = {
hearts: number;
points: number;
hasActiveSubscription: boolean;
};

export const Items = ({
    hearts, 
    points, 
    hasActiveSubscription,
}: Props) => {
    const [pending, startTransition] = useTransition();

   const onRefillHearts = () => {
    if (pending || hearts === 5 || points < POINTS_TO_REFILL) {
        return;
        }

        startTransition(() => {
        refillHearts()
        .catch(() => toast.error("Something went wrong" ))
        });
    };

    const onUpgrade = () => {
        startTransition( () => {
        createStripeUrl()
        .then((response) => {
        if (response.data) {
        window.location.href = response.data;
        }
        })
        .catch(() => toast.error("Something went wrong")) ;
    });
};

    return( 
        <ul className="w-full">
        <div className="flex items-center w-full p-4 gap-x-4 border-t-2">
            <Image 
            src="/heart.png" 
            alt="Heart" 
            height={60} 
            width={60}
            />
        <div className="flex-1">
        <p className="text-neutral-700 text-base lg:text-xl font-bold">
        Refill hearts 
        </p> 
        </div>
        <Button 
        onClick={onRefillHearts}
        disabled={
            pending 
            || hearts === 5 
            || points < POINTS_TO_REFILL}
            className="w-28"
        >
            {hearts === 5
            ? "full"
            : (
            <div className="flex items-center">
              <Image
                src="/gem.png"
                alt="Points" 
                height={30} 
                width={30}
              />
              <p>
                {POINTS_TO_REFILL}
              </p>
              </div>
            )
        }
        </Button>
        </div> 
        <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-2">
            <Image 
            src="/progem.png" 
            alt="Unlimited" 
            height={40} 
            width={40}/>
            <div className="flex-1">
                <p className="text-neutral-700 text-base lg:text-xl font-bold">
                    Unlimited hearts
                 </p> 
            </div>
        <Button
        onClick={onUpgrade}
        disabled={pending}
        className="w-28"
        >
            {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
        </div>
        </ul>
    );
}