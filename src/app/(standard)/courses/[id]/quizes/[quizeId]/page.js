import DynamicPagesApi from "@/api/dynamic";
import LessonsSidebarOpenBoxes from "@/components/sections/course/LessonsSidebarOpenBoxes";
import QuizQuession from "@/components/sections/QuizQuession";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
    }

    const data = await DynamicPagesApi.course(id);
    const course = data.course;
    const lessons = course.lessons;
    lessons.find(finder);

    return (
        <main className="flex md:container mx-4 gap-7 mt-7 md:mx-auto">
            <div className="grow hidden sm:flex flex-col gap-4 items-end">
                <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
                    <Input placeholder="Search" className="p-3 border-none" />
                    <Search className="rotate-90 text-sm size-4" />
                </div>

                <div className="w-full">
                    <LessonsSidebarOpenBoxes lessons={lessons} course={course} />
                </div>
            </div>

            <div className="grow-[4] flex flex-col gap-11">
                <h1 className="text-xl font-bold">Quiz</h1>
                {
                    currentQuize.questions.map(quession => (
                        <QuizQuession key={quession.id} quession={quession.question} chooses={[]} answer={quession.correctAnswerId} />
                    ))
                }
                <Button className="w-fit px-16">Send</Button>
            </div>
            <div className="grow hidden sm:block"></div>
        </main>
    )
}