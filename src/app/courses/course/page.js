// import CourseFeatures from "@/components/cards/CourseFeatures";
import UserPositionSection from "@/components/sections/user_position_section";

export default function CourseDetailsPage() {
    const data = {
        title: "Arabic language | The comprehensive course - Learn modern",
        reviewsDescription: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab",
        duration: 2, // hours
        lectures: 8,
        tags: ["Android", "javascript"],
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
        <div>
            <UserPositionSection pageName="Course Details" position="Home | Course Details" />
            {/* <div className="container mx-auto mt-7">
                <CourseFeatures enrolled={1200} duration={2} lectures={8} categories={["Technology"]} tags={["Android", "Javascript"]} instructorName="Hubert Franck" price={54} />
            </div> */}
        </div>
    )
}