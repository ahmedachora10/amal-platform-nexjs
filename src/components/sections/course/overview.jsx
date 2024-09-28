import { ChevronUp, CirclePlay, Clock9Icon, File } from "lucide-react";
import Link from "next/link";
import TextSection from "../text_section";
import CourseLesson from "./CourseLesson";
import React from "react";

/**
 * 
 * @param {{data: import("@/types/static/global").Course, lessons: import("@/types/static/global").CourseLesson[]}} param0 
 * @returns 
 */
export default function CourseOverviewSection({ data, lessons }) {
    return (
        <section className="w-full">
            <div>
                <TextSection title="Overview" id="overview" content={data.overview} />
            </div>



            {(lessons && lessons.length) ? (
                <div className="flex flex-col justify-between w-full">
                    <thead className="grow flex">
                        <div className="text-sm flex gap-3 items-center justify-start grow bg-[#F9F9F9] p-4">
                            <ChevronUp />
                            <p>Getting Started</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex text-sm gap-2 items-center">
                                <CirclePlay className="text-xs" />
                                <p>{data.lessons_count || 0} lectures</p>
                            </div>

                            <div className="flex text-sm gap-2 items-center">
                                <Clock9Icon className="text-xs" />
                                <p>{data.duration} min</p>
                            </div>
                        </div>
                    </thead>
                    <hr />

                    <tbody className="flex flex-col">
                        {lessons?.map((lesson, i) => (
                            <React.Fragment key={i}>
                                <CourseLesson data={lesson} />
                                <hr />
                            </React.Fragment>
                        ))}
                    </tbody>
                </div>
            ) : undefined}
        </section>
    )
}