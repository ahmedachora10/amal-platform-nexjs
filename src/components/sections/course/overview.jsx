'use client'
import TextSection from "../text_section";
import React from "react";
import OverviewLesson from "./OverviewLesson";

/**
 * 
 * @param {{data: import("@/types/static/global").Course, lessons: import("@/types/static/global").CourseLesson[]}} param0 
 * @returns 
 */
export default function CourseOverviewSection({ data, lessons = [] }) {
    return (
        <section className="w-full">
            <div>
                <TextSection title="Overview" id="overview" content={data.overview} />
            </div>



            {lessons?.length ? <OverviewLesson lesson={lessons[0]} key={lessons[0].id} hiddenByDefault={false} /> : null}

            {lessons?.map((lesson, index) => {
                if (index == 0) return;

                return (lesson.quizzes.length || lesson.videos.length) ? (
                    <React.Fragment key={index}>
                        {/* only first lesson is show by default, others are hidden by default */}
                        <OverviewLesson lesson={lesson} key={lesson.id} hiddenByDefault={true} courseId={data.id} />
                        <hr />
                    </React.Fragment>
                ) : null
            })
            }
        </section>
    )
}