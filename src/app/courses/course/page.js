import CourseFeatures from "@/components/cards/CourseFeatures";
import ReviewsCounts from "../../../components/cards/RatingCounts";
import TextSection from "@/components/sections/text_section";
import UserPositionSection from "@/components/sections/user_position_section";
import test2 from "@/app/test-2.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import TextWithYelloTrue from "@/components/yellow_true_txt";
import { ArrowUp, ChevronUp, CirclePlay, Clock9Icon, File, ToyBrick } from "lucide-react";
import Link from "next/link";
import ClientReview from "@/components/cards/ClientReview";
import BestSellingCourses from "@/components/sections/BestSellingCourses";

export default function CourseDetailsPage() {
    const virtualCourseRequiredData = {
        title: "Arabic language | The comprehensive course - Learn modern",
        reviewsDescription: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab",
        duration: 2, // hours
        lectures: 8,
        enrolled: 20,
        tags: ["Android", "javascript"],
        categories: ["technology"],
        instructor: "Hubert Frank",
        price: 54, // $54
        description: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.`,
        overview: `The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab`,
        rates: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 5
        },
        lessons: [
            { title: "First Hour Lesson 1", link: "/" },
            { title: "First Hour Lesson 2", link: "/" },
            { title: "First Hour Lesson Four", link: "/" },
            { title: "First Hour Quiz", link: "/" }
        ],
        reviews: [
            {
                rate: 4.3, name: "Natasha Fisher",
                text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
            },
            {
                rate: 4.3, name: "Natasha Fisher",
                text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
            },
            {
                rate: 4.3, name: "Natasha Fisher",
                text: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz"
            },
        ],
    }

    return (
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
                                enrolled={virtualCourseRequiredData.enrolled}
                                lectures={virtualCourseRequiredData.lectures}
                                duration={virtualCourseRequiredData.duration}
                                price={virtualCourseRequiredData.price}
                                categories={virtualCourseRequiredData.categories}
                                tags={virtualCourseRequiredData.tags}
                                instructorName={virtualCourseRequiredData.instructor}
                            />
                        </div>

                        <div className="flex justify-between gap-2 mt-7">
                            <Button variant="outline" className="font-bold w-full bg-[#F9B03F] hover:bg-[#f9af3fd0] text-white">Description</Button>
                            <Button variant="outline" className="font-bold w-full">Overview</Button>
                            <Button variant="outline" className="font-bold w-full">Reviews</Button>
                        </div>
                    </div>

                    <div className="text-sm flex flex-col items-center">
                        <TextSection content={`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.`} />
                        <TextSection content={`The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk TV quiz. How quickly daft jumping zebras vex. Two driven jocks help fax my big quiz. Quick, Baz, get my woven flax jodhpurs! "Now fax quiz Jack!" my brave ghost pled. Five quacking zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq. Cozy sphinx waves quart jug of bad milk. A very bad quack might jinx zippy fowls. Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and my wolves quack! Blowzy red vixens fight for a quick jump.`} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 text-sm">
                        <TextWithYelloTrue text="Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox" />
                        <TextWithYelloTrue text="Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox" />
                        <TextWithYelloTrue text="Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox" />
                        <TextWithYelloTrue text="Few quips galvanized the mock jury box. Quick brown dogs jump over the lazy fox" />
                    </div>

                    <div>
                        <TextSection title="Overview" id="overview" content={"The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab"} />
                    </div>

                    <div className="flex flex-col justify-between w-full">
                        <thead className="grow flex">
                            <div className="text-sm flex gap-3 items-center justify-start grow bg-[#F9F9F9] p-4">
                                <ChevronUp />
                                <p>Getting Started</p>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="flex text-sm gap-2 items-center">
                                    <CirclePlay className="text-xs" />
                                    <p>3 lectures</p>
                                </div>

                                <div className="flex text-sm gap-2 items-center">
                                    <Clock9Icon className="text-xs" />
                                    <p>12 min</p>
                                </div>
                            </div>
                        </thead>
                        <hr />

                        <tbody className="flex flex-col">
                            <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                                <div className="flex items-center gap-2">
                                    <File />
                                    <p>First Hour Lesson 1</p>
                                </div>

                                <div>
                                    <Link href="" className="text-[#084C94]">Preview</Link>
                                </div>
                            </div>
                            <hr />

                            <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                                <div className="flex items-center gap-2">
                                    <File />
                                    <p>First Hour Lesson 2</p>
                                </div>

                                <div className="flex gap-3">
                                    <Clock9Icon />
                                    <p>7 min</p>
                                </div>
                            </div>
                            <hr />

                            <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                                <div className="flex items-center gap-2">
                                    <File />
                                    <p>First Hour Lesson 3</p>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <Clock9Icon />
                                    <p>5 min</p>
                                </div>
                            </div>
                            <hr />

                            <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                                <div className="flex items-center gap-2">
                                    <File />
                                    <p>First Hour Lesson 4</p>
                                </div>

                                <div className="flex gap-3 items-center">
                                    <Clock9Icon />
                                    <Link href="" className="text-[#084C94]">8 Quessions</Link>
                                </div>
                            </div>
                            <hr />
                        </tbody>
                    </div>

                    <div>
                        <TextSection title="Reviews" content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab" />
                    </div>

                    <div className="w-full">
                        <ReviewsCounts counts={virtualCourseRequiredData.rates} />
                    </div>

                    <div>
                        <TextSection title="See what learners said" content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab." />
                    </div>

                    <div className="p-7 border-2 border-[#F0F4F9] w-full rounded-md">
                        {virtualCourseRequiredData.reviews.map(review => (
                            <ClientReview noMaxWidth name={review.name} reviewText={review.text} rate={review.rate} key={review.rate + review.text + review.name} imageComponent={<Image src={test2} />} />
                        ))}
                    </div>

                    <div className="w-full">
                        <h1 className="text-3xl">Related Courses</h1>
                        <BestSellingCourses />
                    </div>

                </div>

                <div className="justify-end grow relative hidden lg:flex">
                    <div className="sticky top-0">
                        <CourseFeatures
                            enrolled={virtualCourseRequiredData.enrolled}
                            lectures={virtualCourseRequiredData.lectures}
                            duration={virtualCourseRequiredData.duration}
                            price={virtualCourseRequiredData.price}
                            categories={virtualCourseRequiredData.categories}
                            tags={virtualCourseRequiredData.tags}
                            instructorName={virtualCourseRequiredData.instructor}
                        />
                    </div>

                </div>

            </main>

        </div>
    )
}