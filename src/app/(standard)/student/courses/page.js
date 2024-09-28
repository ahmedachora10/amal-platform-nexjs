'use client';

import DynamicPagesApi from "@/api/dynamic";
import Course from "@/components/cards/Course";
import { useEffect, useState } from "react";

export default function StudentCoursesPage() {
    /** @type {[import("@/types/static/global").Course[], (value:import("@/types/static/global").Course[]) => void]} */
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        DynamicPagesApi.studentCourses().then(courses => {
            setIsPending(false);
            setData(courses);
        });
    }, []);

    return (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {data.map(course => {

                if (course.course) course = course.course;

                return (
                    <Course key={course.id} rating={""} category={course.category.name} title={course.name} price={course.price} link={`/courses/${course.id}/details`} subscriptions={course.subscriptions_count} />
                )
            })}

            {
                (!data.length && !isPending) ? (
                    <h4 className="text-xl text-center">You don't have any courses</h4>
                ) : undefined
            }
        </div>
    )
}