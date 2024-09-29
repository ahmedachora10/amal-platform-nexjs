'use client';
import { ChevronDown, ChevronUp, CirclePlay, Clock9Icon } from "lucide-react";
import React, { useState } from "react";
import CourseLessonUnit from "./CourseLessonUnit";

/**
 * 
 * @param {{hiddenByDefault: boolean, lesson: import("@/types/static/global").Lesson}} param0 
 * @returns 
 */
export default function OverviewLesson({ hiddenByDefault, lesson }) {
    const [hidden, setHidden] = useState(hiddenByDefault);
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
                        <p>{lesson.videos.length || 0} lectures</p>
                    </div>

                    <div className="flex text-sm gap-2 items-center">
                        <Clock9Icon className="text-xs" />
                        <p>{2} min</p>
                    </div>
                </div>
            </div>

            <div className={"flex-col " + (hidden ? "hidden" : "flex")}>
                <hr />
                {lesson.videos.map((video) => (
                    <React.Fragment key={video.id}>
                        <CourseLessonUnit name={video.name} icon="file" icon2="time" unit={12} unitName="min" url="" />
                        <hr />
                    </React.Fragment>
                ))}

                {lesson.quizzes.map(quize => (
                    <React.Fragment key={quize.id}>
                        <CourseLessonUnit name={quize.name} icon="quession" icon2="none" unit={quize.questions_count || 0} unitName="Quessions" url="s" />
                        <hr />
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}