import LessonQuizBox from "@/components/lesson_quiz_box";
import Quiz from "@/components/sections/Quiz";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OpenBox from "@/components/ui/open_box";
import { Search } from "lucide-react";

export default function CourseQuiz() {
    return (
        <main className="flex md:container mx-4 gap-7 mt-7 md:mx-auto">
            <div className="grow hidden sm:flex flex-col gap-4 items-end">
                <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
                    <Input placeholder="Search" className="p-3 border-none" />
                    <Search className="rotate-90 text-sm size-4" />
                </div>

                <div className="w-full">
                    <OpenBox title="Getting Started" openClassName="n" open>
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <div className="w-full border-2 border-[#EAEAEA] p-3">Quiz</div>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                </div>
            </div>

            <div className="grow-[4] flex flex-col gap-11">
                <h1 className="text-xl font-bold">Quiz</h1>
                <Quiz quession="01. What Does We Do ?" answer="2" chooses={["nothing", "work hard", "sleep", "tea"]} />
                <Quiz quession="02. What Does We Do ?" answer="2" chooses={["nothing", "work hard", "sleep", "tea"]} />
                <Quiz quession="03. What Does We Do ?" answer="2" chooses={["nothing", "work hard", "sleep", "tea"]} />
                <Quiz quession="04. What Does We Do ?" answer="2" chooses={["nothing", "work hard", "sleep", "tea"]} />
                <Button className="w-fit px-16">Send</Button>
            </div>
            <div className="grow hidden sm:block"></div>
        </main>
    )
}