import { FeedWrapper } from "@/components/feedwrapper";
import { StickyWrapper } from "@/components/stickywrapper";
import { UserProgress } from "@/components/user-progress";
import { redirect } from "next/navigation";
import { getCourseProgress, 
  getLessonPercentage, 
  getUnits, 
  getUserProgress, 
  getUserSubscription } from "@/db/queries";
import { Unit } from "./unit";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quest";
import GMStreakButton from "@/app/gmstreak/page";
import WordOfTheWeek from "@/app/wotw/page";
import TestimonialSlider from "@/app/testi/page";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress() ;
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();

const [
userProgress,
units,
courseProgress, 
lessonPercentage,
userSubscription,
] = await Promise.all([
userProgressData,
unitsData,
courseProgressData, 
lessonPercentageData,
userSubscriptionData,
]);

if (!userProgress || !userProgress.activeCourse) {
redirect("/courses");
}

if (!courseProgress) {
  redirect("/courses");
}

const isPro = !!userSubscription?.isActive;

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            <StickyWrapper>
                <UserProgress 
                activeCourse={userProgress.activeCourse}
                hearts={userProgress.hearts}
                points={userProgress.points}
                hasActiveSubscription={isPro} 
                />
            {!isPro && (
              <Promo />
            )}
            <WordOfTheWeek />
            <GMStreakButton />
            <TestimonialSlider />
            <Quests points={userProgress.points}/>
            </StickyWrapper>
            <FeedWrapper>
                {units.map((unit) => (
                  <div key={unit.id} className="mb-10">
                    <Unit
                      id={unit.id}
                      order={unit.order} 
                      description={unit.description} 
                      title={unit.title} 
                      lessons={unit.lessons} 
                      activeLesson={courseProgress?.activeLesson} 
                      activeLessonPercentage={lessonPercentage}
                    />
                  </div>
                ))}
            </FeedWrapper>
            
            
        </div>
    );
};

export default LearnPage;