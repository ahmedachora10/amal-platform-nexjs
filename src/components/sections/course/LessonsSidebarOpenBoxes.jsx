"use client";
import LessonQuizBox from "@/components/lesson_quiz_box";
import OpenBox from "@/components/ui/open_box";
import LessonVideoSidebarOpenBox from "./LessonVideoSidebarOpenBox";

/**
 * @param {{sections: import("@/types/static/global").Lesson[], course: import("@/types/static/global").Course}} param0
 */
export default function LessonsSidebarOpenBoxes({ sections = [], course }) {
  return (
    <>
      {sections?.map((section) =>
          (<OpenBox title={section.name} openClassName="n" key={section.id}>
            {section.videos.map((video) => (
              <LessonVideoSidebarOpenBox video={video} courseId={course.id} key={video.id} />
            ))}
            <div className="py-4 divide-x" />
            {section?.quizzes.map((quize) => (
              <LessonQuizBox
                key={quize.id}
                noProgress
                title={quize.name}
                unitName={"Q"}
                unitValue={quize?.questions.length}
                url={
                  quize.questions.length
                    ? `/courses/${course?.id}/quizes/${quize?.id}`
                    : undefined
                }
              />
            ))}
          </OpenBox>
      ))}
    </>
  );
}
