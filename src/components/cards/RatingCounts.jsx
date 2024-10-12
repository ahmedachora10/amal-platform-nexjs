import { Star } from "lucide-react";

/**
 *
 * @param {{counts: import("@/types/ReviewsCounts").ReviewsCounts, averageRating: string}} props
 */
export default function ReviewsCounts(props) {
  const { counts, averageRating } = props;
  console.log(`counts:`, counts);
  const totalReviews = Object.values(counts).reduce(
    (acc, curr) => acc + curr,
    0
  ); // Sum all review counts

  const formatPercentage = (count) => {
    const percentage = (count / totalReviews) * 100;
    return isNaN(percentage) ? "0" : percentage.toFixed(2);
  };
  console.log(`formatPercentage:`, formatPercentage);

  return (
    <div className="flex flex-col gap-4 p-4 my-5 border md:flex-row">
      {/* Summary Data */}
      <div className="flex flex-col items-center justify-center flex-grow gap-4">
        <h1 className="font-sans text-3xl font-bold">{averageRating}</h1>
        <div className="flex gap-2 text-yellow-500">
          {/* Render stars dynamically based on the average rating */}
          {[...Array(5)].map((_, i) => (
            <Star key={i} filled={i < Math.floor(averageRating)} />
          ))}
        </div>
        <p>Rating {averageRating} out of 5</p>
      </div>
      {Object.values(counts).some((count) => count > 0) && (
        <>
          <div className="w-full border md:w-0"></div>
          <div className="flex-grow-[2] flex flex-col gap-3 p-4">
            {Object.keys(counts).map((star) => (
              <div
                key={star}
                className="flex items-center justify-between gap-3 whitespace-nowrap"
              >
                {star} stars
                <hr className="w-[85%] border border-[#707070]" />
                {formatPercentage(counts[star])} %
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
