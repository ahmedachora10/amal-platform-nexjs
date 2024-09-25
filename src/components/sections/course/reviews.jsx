import ClientReview from "@/components/cards/ClientReview";
import ReviewsCounts from "../../../components/cards/RatingCounts";
import TextSection from "../text_section";
import Image from "next/image";

export default function ReviewsSection({ data }) {
    return (
        <section className="w-full">

            <div>
                <TextSection id="reviews" title="Reviews" content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab" />
            </div>

            <div className="w-full">
                <ReviewsCounts counts={data.rates} />
            </div>

            <div>
                <TextSection title="See what learners said" content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab." />
            </div>

            <div className="p-7 border-2 border-[#F0F4F9] w-full rounded-md">
                {data.reviews.map(review => (
                    <ClientReview noMaxWidth name={review.name} reviewText={review.text} rate={review.rate} key={review.rate + review.text + review.name} imageComponent={<Image src={data.img} />} />
                ))}
            </div>
        </section>
    )
}