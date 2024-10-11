"use client";

import DynamicPagesApi from "@/api/dynamic";
import CourseSkeleton from "@/components/ui/skeletons/course";
import { CalendarIcon, FileTextIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function StudentCoursesPage() {
  /** @type {[import("@/types/static/global").Course[], (value:import("@/types/static/global").Course[]) => void]} */
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    DynamicPagesApi.studentCourses().then((courses) => {
      setIsPending(false);
      setData(courses);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Your Courses</h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {isPending
          ? Array.from({ length: 4 }).map(() => <CourseSkeleton />)
          : null}
        {!isPending &&
          data?.map((course) => <CourseCard key={course.id} course={course} />)}

        {!data?.length && !isPending ? (
          <h4 className="text-xl text-center">You don't have any tests</h4>
        ) : undefined}
      </div>
    </div>
  );
}

const CourseCard = ({ course }) => {
  // NOTE
  //  course?.createdAt Not in API
  // NOTE
  // const courseDate = new Date(course?.createdAt).toLocaleDateString("en-US", {
  //   weekday: "short",
  //   month: "numeric",
  //   day: "numeric",
  //   year: "numeric",
  // });
  const courseDate = "Thu, 10/10/2024";

  return (
    <div className="flex w-full gap-2 p-4 transition-shadow border rounded-lg shadow-sm hover:shadow-md">
      <div className="flex gap-4">
        <Image
          width={60}
          height={60}
          src={course?.thumbnail}
          className="bg-cover"
          alt="Course Image"
          loading="lazy"
        />
        <div className="flex flex-col justify-between">
          <p className="text-sm text-gray-600">
            {course?.category?.name} Language | {course?.name}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <CalendarIcon size={16} />
              <span>{courseDate}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FileTextIcon size={16} />
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
