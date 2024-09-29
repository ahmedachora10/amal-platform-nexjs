import CourseFeatures from "@/components/cards/CourseFeatures";
import UserPositionSection from "@/components/sections/user_position_section";
import test2 from "@/app/test-2.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReviewsSection from "@/components/sections/course/reviews";
import CourseOverviewSection from "@/components/sections/course/overview";
import CourseDescriptionSection from "@/components/sections/course/description";
import DynamicPagesApi from "@/api/dynamic";
import Courses from "@/components/sections/home/courses";
import { notFound } from "next/navigation";

export default async function CourseDetailsPage({ params }) {
    // const virtualCourseRequiredData = {
    //     title: "Arabic language | The comprehensive course - Learn modern",
    //     reviewsDescription: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab",
    //     duration: 2, // hours
    //     lectures: 8,
    //     enrolled: 20,
    //     tags: ["Android", "javascript"],
    //     categories: ["technology"],
    //     instructor: "Hubert Frank",
    //     price: 54, // $54
    //     description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.`,
    //     overview: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab`,
    //     img: test2,
    //     rates: {
    //         1: 0,
    //         2: 0,
    //         3: 0,
    //         4: 0,
    //         5: 5
    //     },
    //     lessons: [
    //         { title: "First Hour Lesson 1", link: "/" },
    //         { title: "First Hour Lesson 2", link: "/" },
    //         { title: "First Hour Lesson Four", link: "/" },
    //         { title: "First Hour Quiz", link: "/" }
    //     ],
    //     reviews: [
    //         {
    //             rate: 4.3, name: "Natasha Fisher",
    //             text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
    //         },
    //         {
    //             rate: 4.3, name: "Natasha Fisher",
    //             text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
    //         },
    //         {
    //             rate: 4.3, name: "Natasha Fisher",
    //             text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
    //         },
    //     ],
    // }
    const data = await DynamicPagesApi.course(params.id);
    /**
     * @type {import("@/types/static/global").Course}
     */
    const virtualCourseRequiredData = data?.course;

    if (!data) {
        notFound();
    }

    return data ? (
        <div className="overflow-hidden flex flex-col gap-7">
            <UserPositionSection pageName="Course Details" position="Home | Course Details" />

            <main className="grow flex mx-auto container mt-7">
                <div className="grow hidden lg:block"></div>
                <div className="grow-[4] flex flex-col gap-16 max-w-[50vw] mx-auto items-center">
                    <h1 className="text-4xl">Arabic language | The comprehensive course - Learn modern</h1>

                    <div className="flex flex-col gap-3">
                        <Image src={test2} className="w-full" />
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

                        <div className="flex justify-between gap-2 mt-7">
                            <Button variant="outline" className="font-bold w-full bg-[#F9B03F] hover:bg-[#f9af3fd0] text-white">Description</Button>
                            <Button variant="outline" className="font-bold w-full"><Link href="#overview">Overview</Link></Button>
                            <Button variant="outline" className="font-bold w-full"><Link href="#reviews">Reviews</Link></Button>
                        </div>
                    </div>


                    <CourseDescriptionSection data={virtualCourseRequiredData} />
                    <CourseOverviewSection data={virtualCourseRequiredData} lessons={data.course.lessons} />
                    <ReviewsSection data={virtualCourseRequiredData} />

                    {
                        data.relatedCourses.length ?
                            <div className="w-full">
                                <h1 className="text-3xl">Related Courses</h1>
                                <Courses data={data.relatedCourses || []} />
                            </div> : null
                    }

                </div>

                <div className="justify-end grow relative hidden lg:flex">
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
    ) : null
}