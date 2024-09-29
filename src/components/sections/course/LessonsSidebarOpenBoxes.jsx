import LessonQuizBox from "@/components/lesson_quiz_box";
import OpenBox from "@/components/ui/open_box";

/**
 * @param {{lesson: import("@/types/static/global").Lesson[], course: import("@/types/static/global").Course}} param0
 */
export default function LessonsSidebarOpenBoxes({ lessons = [], course }) {
    return (
        <>
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
        </>
    )
}