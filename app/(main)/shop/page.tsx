import { FeedWrapper } from "@/components/feedwrapper";
import { StickyWrapper } from "@/components/stickywrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import WordOfTheWeek from "@/app/wotw/page";


const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [
   userProgress,
   useSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData
  ]);

  if (!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
  }

  

    return ( 
       <div className="flex flex-row-reverse gap-[48px] px-6">
        <StickyWrapper>
        <UserProgress 
        activeCourse={userProgress.activeCourse} 
        hearts={userProgress.hearts} 
        points={userProgress.points} 
        hasActiveSubscription={!!useSubscription?.isActive}
        />
        {!!useSubscription?.isActive && (
            <Promo />
        )}
        <WordOfTheWeek />
        </StickyWrapper>
        <FeedWrapper>
        <Image 
        src="/sh.png" 
        alt="Shop" 
        height={160} 
        width={160}
        className="mx-auto"
        />
        <h1 className="text-center font-bold text-neutral-800 text-2xl mb-6">
            Shop 
        </h1>
        <p className="text-muted-foreground text-center text- lg mb-6">
            Make good use of your gems.
        </p>
        <Items
        hearts={userProgress.hearts} 
        points={userProgress .points}
        hasActiveSubscription={!!useSubscription?.isActive}
        />
       
        </FeedWrapper>
    </div>
  );
};

export default ShopPage;