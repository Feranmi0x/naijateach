import { quests } from "@/app/constant";
import WordOfTheWeek from "@/app/wotw/page";
import { FeedWrapper } from "@/components/feedwrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/stickywrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";


const questPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();


  const [
   userProgress,
   useSubscription,

  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,

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
        {!useSubscription?.isActive && (
            <Promo />
        )}
        <WordOfTheWeek />
        </StickyWrapper>
        <FeedWrapper>
        <Image 
        src="/qt.png" 
        alt="quest" 
        height={160} 
        width={160}
        className="mx-auto"
        />
        <h1 className="text-center font-bold text-neutral-800 text-2xl mb-6">
            Quests
        </h1>
        <p className="text-muted-foreground text-center text-lg mb-6">
        Complete quests by earning points
        </p>
        <ul className="w-full">
          {quests.map((quest) => {
            const progress = (userProgress.points / quest.value) * 100;

            return ( 
            <div
            className="flex items-center w-full p-4 gap-x-4 border-t-2" 
            key={quest.title}
            >
            <Image 
            src="/gem.png" 
            alt="Points" 
            width={60} 
            height={60}
            />
            <div className="flex flex-col gap-y-2 w-full"> 
              <p className="text-neutral-700 text-xl font-bold"> 
                {quest.title} 
              </p>
            <Progress value={progress} /> </div>
            </div>
            )
            })}
        </ul>
        </FeedWrapper>
    </div>
  );
};

export default questPage;