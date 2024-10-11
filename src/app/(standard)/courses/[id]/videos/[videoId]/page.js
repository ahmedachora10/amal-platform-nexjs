import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import test3 from "@/app/test-3.png";
import TextSection from "@/components/sections/text_section";
import FileDownload from "@/components/file_download";
import DynamicPagesApi from "@/api/dynamic";
import { notFound } from "next/navigation";
import LessonsSidebarOpenBoxes from "@/components/sections/course/LessonsSidebarOpenBoxes";

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
    const course = data?.course;
    const lessons = course?.sections;
    const lesson = lessons?.find(finder);

    if (!currentVideo && !lesson) notFound();
    return (Boolean(currentVideo) && Boolean(lesson)) ? (
        <main className="flex md:container mx-4 gap-7 mt-7 md:mx-auto">
            <div className="grow hidden md:flex flex-col gap-4 items-end min-w-[18rem]">
                <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
                    <Input placeholder="Search" className="p-3 border-none" />
                    <Search className="rotate-90 text-sm size-4" />
                </div>

                <div className="w-full">
                    <LessonsSidebarOpenBoxes lessons={lessons} course={course} />
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