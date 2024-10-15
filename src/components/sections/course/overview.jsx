"use client";
import React from "react";
import TextSection from "../text_section";
import OverviewLesson from "./OverviewLesson";
import useAuth from "@/app/_hook/useAuth";

/**
 *
 * @param {{data: import("@/types/static/global").Course, lessons: import("@/types/static/global").CourseLesson[]}} param0
 * @returns
 */
export default function CourseOverviewSection({ data, sections = [] }) {

  const { isStudentSubscripted } = useAuth();

  data.isSubscribed = isStudentSubscripted(data.id);

  return (
    <section className="w-full">
      <div>
        <TextSection title="Overview" id="overview" content={data.overview} />
      </div>

      {sections?.map((section, index) => {
        return <React.Fragment key={index}>
            {/* only first section is show by default, others are hidden by default */}
            <OverviewLesson
              key={section.id}
              section={section}
              hiddenByDefault={true}
              courseId={data?.id}
              isSubscribed={data?.isSubscribed}
            />
            <hr />
          </React.Fragment>
        ;
      })}
    </section>
  );
}
