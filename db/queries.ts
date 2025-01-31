import { cache } from "react";
import db from "./drizzle";
import { 
  body,
    challengeProgress,
    challenges,
    commonExp,
    courses, 
    genders, 
    igbody, 
    igcommonExp, 
    iggenders, 
    ignumbers, 
    igpronouns, 
    igrelatives, 
    igslangs, 
    lessons, 
    numbers, 
    pronouns, 
    relatives, 
    slangs, 
    units, 
    userProgress, 
    userSubscription,
    yrbody,
    yrcommonExp,
    yrgenders,
    yrnumbers,
    yrpronouns,
    yrrelatives,
    yrslangs} from "@/db/schema";
import { eq } from "drizzle-orm";
import { auth } from "@clerk/nextjs/server";


export const getApiData = async() => {
const data = await db.query.challenges.findFirst({
  where: eq(challenges.id, 2),
 });

 return data;
}

export const getUserProgress = cache(async () => {
    const { userId } = auth();

    if (!userId) {
    return null;
    }

    const data = await db.query.userProgress.findFirst({
    where: eq(userProgress.userId, userId),
    with: {
       activeCourse: true,
      },
    });

    return data;
   });

    export const getUnits = cache(async () => {
        const { userId } = auth();
        const userProgress = await getUserProgress();

         if (!userId || !userProgress?.activeCourseId) {
         return [];
         }
        const data = await db.query.units.findMany({
          orderBy: (units, { asc }) => [asc(units.order)],
           where: eq(units.courseId, userProgress.activeCourseId),
                with: {
                lessons: {
                  orderBy: (lessons, { asc }) => [asc(lessons.order)],
                with: {
                challenges: {
                  orderBy: (challenges, { asc }) => [asc(challenges.order)],
                with: {
                challengeProgress: {
                    where: eq(
                        challengeProgress.userId, 
                        userId,
                      ),
                     }
                   },
                 },
               },
            },
          },
        });
        
        const normalizedData = data.map((unit) => {
            const lessonsWithCompletedStatus = unit.lessons.map((lesson) => {

              if (
                lesson.challenges.length === 0
                ) {
                return { ...lesson, completed: false };
              }
              
            const allCompletedChallenges = lesson.challenges.every((challenge) =>
            {
            return challenge.challengeProgress
            && challenge.challengeProgress.length > 0
            && challenge.challengeProgress.every((progress) => progress.completed);
            });

            return { ...lesson, completed: allCompletedChallenges }
          });

          return { ...unit, lessons: lessonsWithCompletedStatus }
        });

    return normalizedData;
})

export const getNumbers = async () => {
  return await db.select().from(numbers);
};

export const getGenders = async () => {
  return await db.select().from(genders); 
};
export const getPronouns = async () => {
  return await db.select().from(pronouns); 
};

export const getSlangs = async () => {
  return await db.select().from(slangs); 
};
export const getCommonExp = async () => {
  return await db.select().from(commonExp); 
};
export const getRelatives = async () => {
  return await db.select().from(relatives); 
};
export const getBody = async () => {
  return await db.select().from(body); 
};

export const yrgetNumbers = async () => {
  return await db.select().from(yrnumbers);
};

export const yrgetGenders = async () => {
  return await db.select().from(yrgenders); 
};

export const yrgetPronouns = async () => {
  return await db.select().from(yrpronouns); 
};

export const yrgetSlangs = async () => {
  return await db.select().from(yrslangs); 
};

export const yrgetcommonExp = async () => {
  return await db.select().from(yrcommonExp); 
};
export const yrgetRelatives = async () => {
  return await db.select().from(yrrelatives); 
};

export const yrgetBody = async () => {
  return await db.select().from(yrbody); 
};

export const iggetNumbers = async () => {
  return await db.select().from(ignumbers);
};

export const iggetGenders = async () => {
  return await db.select().from(iggenders); 
};
export const iggetPronouns = async () => {
  return await db.select().from(igpronouns); 
};

export const iggetSlangs = async () => {
  return await db.select().from(igslangs); 
};

export const iggetcommonExp = async () => {
  return await db.select().from(igcommonExp); 
};
export const iggetRelatives = async () => {
  return await db.select().from(igrelatives); 
};

export const iggetBody = async () => {
  return await db.select().from(igbody); 
};

export const getCourses = cache(async () => {
    const data = await db.query.courses.findMany();

    return data;
});

export const getCourseById = cache(async (courseId: number) => {
  const data = await db.query.courses.findFirst({
    where: eq(courses.id, courseId),
    with: {
      units: {
        orderBy: (units, { asc }) => [asc(units.order)],
        with: {
          lessons: {
            orderBy: (lessons, { asc }) => [asc(lessons.order)],
          }
        }
      }
    }
  });
    
    return data;
});

export const getCourseProgress = cache (async () => {
  const { userId } = auth();
  const userProgress = await getUserProgress();
  if (!userId || !userProgress?.activeCourseId) {
  return null;
  }

  const unitsInActiveCourse = await db.query.units.findMany({
  orderBy: (units, { asc }) => [asc(units.order)], where: eq(units.courseId, userProgress.activeCourseId),
  with: {
    lessons: {
      orderBy: (lessons, { asc }) => [asc(lessons.order)], 
      with: { 
        unit: true,
        challenges: {
          with: {
            challengeProgress: {
              where: eq(challengeProgress.userId, userId)
            }
          }
        }
      }
    }
  } 
});

const firstUncompletedLesson = unitsInActiveCourse.flatMap((unit) => unit.lessons).find((lesson) => {
return lesson.challenges.some((challenge) => {
return !challenge.challengeProgress || challenge.challengeProgress.length === 0
|| challenge.challengeProgress.some((progress) => progress.completed === false)
  });
});

return {
activeLesson: firstUncompletedLesson, activeLessonId: firstUncompletedLesson?.id,
 };
});

export const getLesson = cache(async (id?: number) => {
  const { userId } = auth();
  const courseProgress = await getCourseProgress();

  const lessonId = id || courseProgress?.activeLessonId;
  if (!lessonId) {
  return null;
  }

  const data = await db.query.lessons.findFirst({
    where: eq(lessons.id, lessonId),
    with: {
     challenges: {
       orderBy: (challenges, { asc }) => [asc(challenges.order)],
     with: {
      challengeOptions: true, 
       challengeProgress: {
        where: userId !== null ? eq(challengeProgress.userId, userId) : undefined,
       },
      },
     },
    },
  });

  if (!data || !data.challenges) {
    return null;
  }
    const normalizedChallenges = data.challenges.map((challenge) => {
    const completed = challenge. challengeProgress && challenge. challengeProgress.length > 0 
    && challenge. challengeProgress.every((progress) => progress. completed)

    return { ...challenge, completed };
    });

    return { ...data, challenges: normalizedChallenges }
});

export const getLessonPercentage = cache (async () => {
  const courseProgress = await getCourseProgress();

  if (!courseProgress?.activeLessonId) {
  return 0;
  }

  const lesson = await getLesson(courseProgress. activeLessonId);

  if (!lesson) {
  return 0;
  }

  const completedChallenges = lesson.challenges
  .filter((challenge) => challenge.completed);
  const percentage = Math.round(
  (completedChallenges.length / lesson.challenges.length) * 100,
  );

  return percentage;
});

const DAY_IN_MS = 86_400_000;

export const getUserSubscription = cache(async () => {
const { userId } = auth();

if (!userId) return null;

const data = await db.query.userSubscription.findFirst ({
where: eq(userSubscription.userId, userId),
});

if (!data) return null;

const isActive =
data.stripePriceId &&
data.stripeCurrentPeriodEnd?.getTime() + DAY_IN_MS > Date.now();

return {
  ...data, 
  isActive: !!isActive,
};
});

export const getTopTenUsers = cache(async () => {
  const { userId } = auth();

  if (!userId) { 
    return [];
  }

  const data = await db.query.userProgress.findMany({
    orderBy: (userProgress, { desc }) => [desc(userProgress.points)], 
    limit: 10,
    columns: {
      userId: true, 
      userName: true, 
      userImageSrc: true, 
      points: true,
    },
  });

  // Manually remove duplicates by userId
  const uniqueUsers = Array.from(new Map(data.map(user => [user.userId, user])).values());

  return uniqueUsers;
});