"use client";
import React from "react";
import TextSection from "../text_section";
import OverviewLesson from "./OverviewLesson";

/**
 *
 * @param {{data: import("@/types/static/global").Course, lessons: import("@/types/static/global").CourseLesson[]}} param0
 * @returns
 */
export default function CourseOverviewSection({ data, sections = [] }) {
  console.log(`data-----:`, data);
  return (
    <section className="w-full">
      <div>
        <TextSection title="Overview" id="overview" content={data.overview} />
      </div>

      {sections?.length ? (
        <OverviewLesson
          lesson={sections[0]}
          key={sections[0].id}
          hiddenByDefault={false}
        />
      ) : null}

      {sections?.map((section, index) => {
        if (index == 0) return;

        return section?.quizzes?.length || section?.videos?.length ? (
          <React.Fragment key={index}>
            {/* only first section is show by default, others are hidden by default */}
            <OverviewLesson
              section={section}
              key={section.id}
              hiddenByDefault={true}
              courseId={data?.id}
              isSubscribed={data?.isSubscribed}
            />
            <hr />
          </React.Fragment>
        ) : null;
      })}
    </section>
  );
}
