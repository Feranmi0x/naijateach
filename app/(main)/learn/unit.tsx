import { lessons, units } from "@/db/schema";
import { UnitBanner } from "./unit-banner";
import { LessonButton } from "./lesson-button";
import { getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import { UserProgress } from "@/components/user-progress";


type Props = {
id: number;
order: number;
title: string;
description: string;
lessons: (typeof lessons.$inferSelect & {
completed: boolean;
})[];
activeLesson: typeof lessons.$inferSelect & {
unit: typeof units.$inferSelect;
} | undefined;
activeLessonPercentage: number;
};

export const Unit = async ({
     
    title, 
    description, 
    lessons, 
    activeLesson, 
    activeLessonPercentage,
}: Props) => {
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
    <>
    <div className="lg:hidden">
      <UserProgress
            activeCourse={userProgress.activeCourse} 
            hearts={userProgress.hearts} 
            points={userProgress.points} 
            hasActiveSubscription={!!useSubscription?.isActive}
      />
      </div>  
    <UnitBanner 
    title={title} 
    description={description} 
    />
    <div className="flex items-center flex-col relative">
       {lessons.map((lesson, index) => {
       const isCurrent = lesson.id === activeLesson?.id;
       const isLocked = !lesson.completed && !isCurrent;

       return (
            <LessonButton
            key={lesson.id} 
            id={lesson.id} 
            index={index}
            totalCount={lessons.length - 1} 
            current={isCurrent} 
            locked={isLocked} 
            percentage={activeLessonPercentage}
             />
          )
       })}
       </div>
    </>
    );
};