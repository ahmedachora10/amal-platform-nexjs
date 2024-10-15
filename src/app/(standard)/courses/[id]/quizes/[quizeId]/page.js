import DynamicPagesApi from "@/api/dynamic";
import LessonsSidebarOpenBoxes from "@/components/sections/course/LessonsSidebarOpenBoxes";
import QuizeProvides from "@/components/sections/QuizeProvides";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { notFound } from "next/navigation";

export default async function CourseQuiz({ params: { id, quizeId } }) {
  /** @type {(import("@/types/static/global").Quiz)|null} */
  let currentQuize = null;

  /** @param {import("@/types/static/global").Lesson} lesson  */
  const finder = (lesson) => {
    for (let quize of lesson.quizzes) {
      if (quize.id == quizeId) {
        currentQuize = quize;
        return true;
      }
    }

    return false;
  };

  const data = await DynamicPagesApi.course(id);
  const course = data?.course;
  const lessons = await DynamicPagesApi.getLessonsDetails(id);
  if (!lessons || !course) notFound();

  const foundQuiz = lessons.find(finder);

  if (!foundQuiz || !currentQuize)
    return (
  <main className="flex mx-4 md:container gap-7 mt-7 md:mx-auto">
        No Quiz Found
      </main>
    );

  return (
    <main className="flex mx-4 md:container gap-7 mt-7 md:mx-auto">
      <div className="flex-col items-end hidden gap-4 grow sm:flex">
        <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
          <Input placeholder="Search" className="p-3 border-none" />
          <Search className="text-sm rotate-90 size-4" />
        </div>

        <div className="w-full">
          <LessonsSidebarOpenBoxes sections={lessons} course={course} />
        </div>
      </div>

      <QuizeProvides currentQuize={currentQuize} />
      <div className="hidden grow sm:block"></div>
    </main>
  );
}
