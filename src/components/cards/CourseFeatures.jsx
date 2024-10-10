"use client";
import { User } from "@/api/user";
import useAuth from "@/app/_hook/useAuth";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";

/**
 *
 * @param {import("@/types/CourseFeatures").CourseFeatures} features
 */
export default function CourseFeatures(features) {
  const { user } = useAuth();
  const [pending, setPending] = useState(false);

  const enrollCourse = () => {
    setPending(true);
    User.enrollCourse({
      course_id: features.courseId,
      price: features.price,
      student_id: user?.id,
    }).then((result) => {
      setPending(false);
      if (result?.status) {
        toast.success(result?.message || "Your Request has been sent");
      } else {
        toast.error(result?.message || "Failed To Enroll Course");
      }
    });
  };

  return (
    <div className="py-4 border border-[#CBD6E2] lg:w-[18.91vw] md:min-w-[18.91vw] lg:max-w-[18.91vw] w-full flex flex-col gap-4">
      <div className="flex flex-col mx-4">
        <h2 className="text-xl font-bold ">Course Features</h2>
      </div>

      <hr className="border border-[#CBD6E2] w-full" />

      <div className="flex flex-col gap-5 mx-4">
        <p>Enrolled: {features.enrolled} students</p>
        <p>Duration: {features.duration} hours</p>
        <p>Lectures: {features.lectures}</p>
        <p>Categories: {features.categories.join(", ")}</p>
        <p>Tags: {features.tags.join(", ")}</p>
        <p>instructor: {features.instructorName}</p>

        <div className="px-4 py-8 bg-[#F2F7FD] flex flex-col justify-center items-center gap-7">
          <h3 className="text-xl font-bold">Price: ${features.price}</h3>
          <Button
            className={
              "rounded-2xl " + (pending ? "bg-gray-300 hover:bg-gray-300" : "")
            }
            onClick={enrollCourse}
          >
            ENROLL COURSE
          </Button>
        </div>
      </div>
    </div>
  );
}
