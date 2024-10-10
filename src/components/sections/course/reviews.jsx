import ClientReview from "@/components/cards/ClientReview";
import ReviewsCounts from "../../../components/cards/RatingCounts";
import TextSection from "../text_section";

export default function ReviewsSection({ data }) {
  const reviews = data?.reviews || [];
  const averageRating = data?.avg || 0;

  // Initialize counts object
  const counts = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  // Count the number of reviews for each star rating
  reviews.forEach((review) => {
    const roundedRate = Math.round(review.rate); // Round to the nearest whole number
    if (counts[roundedRate]) {
      counts[roundedRate] += 1;
    } else {
      counts[roundedRate] = 1;
    }
  });

  return (
    <section className="w-full">
      <div>
        <TextSection
          id="reviews"
          title="Reviews"
          content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab"
        />
      </div>

      <div className="w-full">
        <ReviewsCounts counts={counts} averageRating={averageRating} />
      </div>

      <div>
        <TextSection
          title="See what learners said"
          content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab."
        />
      </div>

      {data?.reviews && (
        <div className="p-7 border-2 border-[#F0F4F9] w-full rounded-md">
          {data?.reviews?.map((review) => (
            <ClientReview
              noMaxWidth
              // name={review.name}
              name={"Mahmoud"}
              reviewText={review.comment}
              rate={review.rate}
              key={review.rate + review.rate}
            />
          ))}
        </div>
      )}
    </section>
  );
}
