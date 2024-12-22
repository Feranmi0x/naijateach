import WordOfTheWeek from "@/app/wotw/page";
import { FeedWrapper } from "@/components/feedwrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/stickywrapper";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { UserProgress } from "@/components/user-progress";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries";
import Image from "next/image";
import { redirect } from "next/navigation";


const leaderboardPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();
  const leaderboardData = getTopTenUsers();

  const [
   userProgress,
   useSubscription,
   leaderboard,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
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
        src="/ld.png" 
        alt="leaderboard" 
        height={160} 
        width={160}
        className="mx-auto"
        />
        <h1 className="text-center font-bold text-neutral-800 text-2xl mb-6">
            leaderboard 
        </h1>
        <p className="text-muted-foreground text-center text- lg mb-6">
            See where you stand among other learners in the community.
        </p>
        {leaderboard.map((userProgress, index) => ( 
          <div
          key={userProgress.userId}
          className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
          >
          <p className="font-bold text-lime-700 mr-4">
            {index + 1}
          </p>
          <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
          <AvatarImage 
          className="object-cover" 
          src={userProgress.userImageSrc}
          />
          </Avatar> 
          <p className="font-bold text-neutral-800 flex-1">
          {userProgress.userName}
          </p>
          <p className="text-muted-foreground">
            {userProgress.points} XP 
          </p>
          </div>
        ))}
        </FeedWrapper>
    </div>
  );
};

export default leaderboardPage;