import LessonQuizBox from "@/components/lesson_quiz_box";
import { Input } from "@/components/ui/input";
import OpenBox from "@/components/ui/open_box";
import { Search } from "lucide-react";
import Image from "next/image";
import test3 from "@/app/test-3.png";
import TextSection from "@/components/sections/text_section";
import FileDownload from "@/components/file_download";
import DynamicPagesApi from "@/api/dynamic";
import { notFound } from "next/navigation";

export default async function CourseVideo({ params: { id, videoId } }) {
    /** @type {(import("@/types/static/global").Video)|null} */
    let currentVideo = null;

    /** @param {import("@/types/static/global").Lesson} lesson  */
    const finder = (lesson) => {
        for (let video of lesson.videos) {
            if (video.id == videoId) {
                currentVideo = video;
                return true;
            };

        }
        return false;
    }

    const data = await DynamicPagesApi.course(id);
    const course = data.course;
    const lessons = course.lessons;
    const lesson = lessons.find(finder);
    console.log(lesson, currentVideo)

    if (!currentVideo && !lesson) notFound();
    return (Boolean(currentVideo) && Boolean(lesson)) ? (
        <main className="flex md:container mx-4 gap-7 mt-7 md:mx-auto">
            <div className="grow hidden md:flex flex-col gap-4 items-end min-w-[18rem]">
                <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
                    <Input placeholder="Search" className="p-3 border-none" />
                    <Search className="rotate-90 text-sm size-4" />
                </div>

                <div className="w-full">
                    {/* <OpenBox title="Getting Started" openClassName="n" open>
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
                    </OpenBox> */}

                    {
                        lessons?.map(lesson => lesson?.videos?.length ? (
                            <OpenBox title={lesson.name} openClassName="n" key={lesson.id}>
                                {lesson.videos.map(video => (
                                    <LessonQuizBox key={video.id} title={video.name} minutes={video.video ? undefined : undefined} progress={undefined} url={video.video ? `/courses/${course.id}/videos/${video.id}` : ""} />
                                ))}
                            </OpenBox>
                        ) : null)
                    }

                    <div className="w-full border-2 border-[#EAEAEA] py-3 px-4 shadow-sm">Quiz</div>


                    {
                        lessons?.map(lesson => lesson?.quizzes?.length ? (
                            <OpenBox title={lesson.name} openClassName="n" key={lesson.id}>
                                {lesson.quizzes.map(quize => (
                                    <LessonQuizBox noProgress title={quize.name} unitName={"Q"} unitValue={quize.questions_count} url={quize.questions_count ? `/courses/${course.id}/quizes/${quize.id}` : undefined} />
                                ))}
                            </OpenBox>
                        ) : null)
                    }

                </div>
            </div>

            <div className="grow-[4] flex flex-col gap-11">
                {currentVideo.video ? (
                    <video controls>
                        <source src={currentVideo.video}></source>
                    </video>
                ) : (
                    <Image src={test3} />
                )
                }

                <TextSection title={currentVideo.name} content={currentVideo.description} />


                {
                    (currentVideo?.attachments?.length || null) ? (
                        <>
                            <h3 className="text-lg font-bold">File</h3>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
                                {currentVideo.attachments.map(attachment => (
                                    <FileDownload key={attachment.url} name={attachment.name} url={attachment.url} />
                                ))}
                            </div>
                        </>
                    ) : null
                }
            </div>
            <div className="grow hidden md:block"></div>
        </main>
    ) : null
}