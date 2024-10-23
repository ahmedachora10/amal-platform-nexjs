"use client";

import DynamicPagesApi from "@/api/dynamic";
import CourseSkeleton from "@/components/ui/skeletons/course";
import { CalendarIcon, FileTextIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {isPending
          ? Array.from({ length: 4 }).map((value,index) => <CourseSkeleton key={index} />)
          : null}
        {!isPending &&
          data?.map((course) => <CourseCard key={course.id + Math.random()} course={course} />)}

        {!data?.length && !isPending ? (
          <h4 className="text-xl text-center">You don't have any courses</h4>
        ) : undefined}
      </div>
    </div>
  );
}

const CourseCard = ({ course }) => {
  return (
    <Link href={`/courses/${course.id}`} className="flex w-full gap-2 p-2 transition-shadow border rounded-lg shadow-sm hover:shadow-md">
      <div className="flex gap-4">
        <Image
          width={70}
          height={70}
          style={{'height': '70px'}}
          src={course?.thumbnail}
          className="bg-cover"
          alt={course.name}
          loading="lazy"
        />
        <div className="flex flex-col justify-start py-2">
          <p className="text-sm text-gray-900 font-bold">
            {course?.category?.name} | {course?.name}
          </p>
          <div className="flex items-center justify-start mt-3">
            <div className="flex items-center gap-2 text-sm text-gray-500 me-5">
              <CalendarIcon size={16} />
              <span>{course.createdAt}</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FileTextIcon size={16} />
              <span>50%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
