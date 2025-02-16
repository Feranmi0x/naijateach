import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const coursePage = async () => {
    const coursesData = getCourses();
    const userProgressData = getUserProgress ();

    const [ 
        courses,
        userProgress,
    ] = await Promise.all([
      coursesData,
      userProgressData,
]);

    return (
        <div className="h-full max-w-[912px] mx-auto px-3">
            <h1 className="font-bold text-2xl text-neutral-700"> Nigerian Language Courses</h1>
            <List
            courses={courses}
            activeCourseId={userProgress?.activeCourseId}
            />
        </div>
    );
};

export default coursePage;