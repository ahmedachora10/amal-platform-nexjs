'use client';
import { ChevronDown, ChevronUp, CirclePlay, Clock9Icon } from "lucide-react";
import React, { useState } from "react";
import CourseLessonUnit from "./CourseLessonUnit";
import CourseLessonVideoUnit from "./CourseLessonVideoUnit";

/**
 * 
 * @param {{hiddenByDefault: boolean, lesson: import("@/types/static/global").Lesson, courseId: number}} param0 
 * @returns 
 */
export default function OverviewLesson({ hiddenByDefault, lesson, courseId = "" }) {
    const [hidden, setHidden] = useState(hiddenByDefault);
    const [duration, setDuration] = useState(0);

    return (
        <div className="flex flex-col justify-between w-full" >
            <div className="grow flex">
                <div className="text-sm flex gap-3 items-center justify-start grow bg-[#F9F9F9] p-4 cursor-pointer hover:shadow-md" onClick={() => setHidden(!hidden)}>
                    {hidden ? <ChevronDown /> : <ChevronUp />}
                    <p className="font-semibold">{lesson.name}</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex text-sm gap-2 items-center">
                        <CirclePlay className="text-xs" />
                        <p>{lesson?.videos?.length || 0} lectures</p>
                    </div>

                    <div className="flex text-sm gap-2 items-center">
                        <Clock9Icon className="text-xs" />
                        <p>{duration.toFixed(2)} min</p>
                    </div>
                </div>
            </div>

            <div className={"flex-col " + (hidden ? "hidden" : "flex")}>
                <hr />
                {lesson?.videos?.map((video) => (
                    <CourseLessonVideoUnit key={video.id} video={video} courseId={courseId} onDuration={(videoDuration) => setDuration(duration + (videoDuration / 60))} />
                ))}

                {lesson.quizzes.map(quize => (
                    <React.Fragment key={quize.id}>
                        <CourseLessonUnit name={quize.name} icon="quession" icon2="none" unit={quize.questions_count || 0} unitName="Quessions" url={`/courses/${courseId}/quizes/${quize.id}`} />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}