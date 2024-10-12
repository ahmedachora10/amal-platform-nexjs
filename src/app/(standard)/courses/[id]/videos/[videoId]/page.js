import DynamicPagesApi from "@/api/dynamic";
import test3 from "@/app/test-3.png";
import FileDownload from "@/components/file_download";
import LessonsSidebarOpenBoxes from "@/components/sections/course/LessonsSidebarOpenBoxes";
import TextSection from "@/components/sections/text_section";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import VideoPlayer from "../VideoPlayer";

export default async function CourseVideo({ params: { id, videoId } }) {
  /** @type {(import("@/types/static/global").Video)|null} */
  let currentVideo = null;

  /** @param {import("@/types/static/global").Lesson} lesson  */
  const finder = (lesson) => {
    for (let video of lesson.videos) {
      if (video.id == videoId) {
        currentVideo = video;
        return true;
      }
    }
    return false;
  };

  const data = await DynamicPagesApi.course(id);
  const course = data?.course;
  const sections = course?.sections;
  const lesson = sections?.find(finder);

  if (!currentVideo && !lesson) notFound();
  return Boolean(currentVideo) && Boolean(lesson) ? (
    <main className="flex mx-4 md:container gap-7 mt-7 md:mx-auto">
      <div className="grow hidden md:flex flex-col gap-4 items-end min-w-[18rem]">
        <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
          <Input placeholder="Search" className="p-3 border-none" />
          <Search className="text-sm rotate-90 size-4" />
        </div>

        <div className="w-full">
          <LessonsSidebarOpenBoxes sections={sections} course={course} />
        </div>
      </div>

      <div className="grow-[4] flex flex-col gap-11">
        {currentVideo?.video ? (
          <VideoPlayer src={lesson?.videos.video} poster={course.thumbnail} />
        ) : (
          <Image src={test3} />
        )}

        <TextSection
          title={currentVideo.name}
          content={currentVideo.description}
        />

        {currentVideo?.attachments?.length || null ? (
          <>
            <h3 className="text-lg font-bold">File</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
              {currentVideo.attachments.map((attachment) => (
                <FileDownload
                  key={attachment.url}
                  name={attachment.name}
                  url={attachment.url}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>
      <div className="hidden grow md:block"></div>
    </main>
  ) : null;
}
