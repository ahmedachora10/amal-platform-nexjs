import TextWithYelloTrue from "@/components/yellow_true_txt";
import TextSection from "../text_section";

export default function CourseDescriptionSection({ data }) {
    return (
        <section className="w-full">
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

        </section>
    )
}