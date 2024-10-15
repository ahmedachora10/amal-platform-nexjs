import DynamicPagesApi from "@/api/dynamic";
import CourseFeatures from "@/components/cards/CourseFeatures";
import CourseDescriptionSection from "@/components/sections/course/description";
import CourseOverviewSection from "@/components/sections/course/overview";
import ReviewsSection from "@/components/sections/course/reviews";
import Courses from "@/components/sections/home/courses";
import UserPositionSection from "@/components/sections/user_position_section";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
  
  /**
   * @type {{course: import("@/types/static/global").Course, courses: import("@/types/static/global").Course[]}}
   */
  const data = await DynamicPagesApi.course(params.id);
  /**
   * @type {import("@/types/static/global").Course}
   */
  const virtualCourseRequiredData = data?.course;
  if (!data) {
    notFound();
  }

  return data ? (
    <div className="flex flex-col overflow-hidden gap-7">
      <UserPositionSection
        pageName="Course Details"
        position="Home | Course Details"
      />

      <main className="container flex mx-auto grow mt-7">
        <div className="hidden grow lg:block"></div>
        <div className="grow-[4] flex flex-col gap-16 max-w-[50vw] mx-auto items-center w-full">
          <h1 className="text-4xl">
            {virtualCourseRequiredData?.category?.name} | {virtualCourseRequiredData.name}
          </h1>

          <div className="flex flex-col w-full gap-3">
            {virtualCourseRequiredData.thumbnail && (
              <Image
                src={virtualCourseRequiredData.thumbnail}
                alt=""
                className="w-fit"
                width={1024}
                height={1024}
              />
            )}
            <div className="flex lg:hidden">
              <CourseFeatures
                enrolled={virtualCourseRequiredData?.subscriptions_count}
                lectures={virtualCourseRequiredData?.lectures || 1}
                duration={virtualCourseRequiredData?.duration}
                price={virtualCourseRequiredData?.price}
                categories={[virtualCourseRequiredData?.category?.name]}
                tags={virtualCourseRequiredData?.tags || []}
                instructorName={virtualCourseRequiredData?.instructor}
                courseId={virtualCourseRequiredData?.id}
              />
            </div>

            <div className="flex justify-between w-full gap-2 mt-7">
              <Button
                variant="outline"
                className="font-bold w-full bg-[#F9B03F] hover:bg-[#f9af3fd0] text-white"
              >
                Description
              </Button>
              <Button variant="outline" className="w-full font-bold">
                <Link href="#overview">Overview</Link>
              </Button>
              <Button variant="outline" className="w-full font-bold">
                <Link href="#reviews">Reviews</Link>
              </Button>
            </div>
          </div>

          <CourseDescriptionSection data={virtualCourseRequiredData} />
          <CourseOverviewSection
            data={virtualCourseRequiredData}
            sections={data.course?.sections}
          />
          <ReviewsSection data={virtualCourseRequiredData.reviews} />

          {data.relatedCourses.length ? (
            <div className="w-full">
              <h1 className="text-3xl">Related Courses</h1>
              <Courses data={data.relatedCourses || []} />
            </div>
          ) : null}
        </div>

        <div className="relative justify-end hidden grow lg:flex">
          <div className="sticky top-0">
            <CourseFeatures
              enrolled={virtualCourseRequiredData.subscriptions_count}
              lectures={virtualCourseRequiredData.lectures || 1}
              duration={virtualCourseRequiredData.duration}
              price={virtualCourseRequiredData.price}
              categories={[virtualCourseRequiredData.category?.name]}
              tags={virtualCourseRequiredData.tags || []}
              instructorName={virtualCourseRequiredData.instructor}
              courseId={virtualCourseRequiredData.id}
            />
          </div>
        </div>
      </main>
    </div>
  ) : null;
}
