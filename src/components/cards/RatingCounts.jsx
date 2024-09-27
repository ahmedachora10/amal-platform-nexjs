import { Star } from "lucide-react";

/**
 * 
 * @param {{counts: import("@/types/ReviewsCounts").ReviewsCounts, averageRating: string}} props
 */
export default function ReviewsCounts(props) {
    const { counts, averageRating } = props;
    const totalReviews = (counts["1"] || 0) + (counts["2"] || 0) + (counts["3"] || 0) + (counts["4"] || 0) + (counts["5"] || 0);
    let fiveStarsPersent = ((counts["5"] / totalReviews) * 100).toString();
    let fourStarsPersent = ((counts["4"] / totalReviews) * 100).toString();
    let threeStarsPersent = ((counts["3"] / totalReviews) * 100).toString();
    let twoStarsPersent = ((counts["2"] / totalReviews) * 100).toString();
    let oneStarPersent = ((counts["1"] / totalReviews) * 100).toString();
    if (isNaN(fiveStarsPersent)) fiveStarsPersent = 0;
    if (isNaN(fourStarsPersent)) fourStarsPersent = 0;
    if (isNaN(threeStarsPersent)) threeStarsPersent = 0;
    if (isNaN(twoStarsPersent)) twoStarsPersent = 0;
    if (isNaN(oneStarPersent)) oneStarPersent = 0;

    return (
        <div className="flex flex-col md:flex-row border p-4 gap-4">
            {/* the suumary data */}
            <div className="flex-grow flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl font-bold font-sans">{averageRating}</h1>
                <div className="flex gap-2 text-yellow-500">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                </div>
                <p>Rating {averageRating} out of 5</p>
            </div>

            {/* separator */}
            <div className="border md:w-0 w-full"></div>

            {/* the rating details */}
            <div className="flex-grow-[2] flex flex-col gap-3 p-4">
                <p className="whitespace-nowrap flex gap-3 items-center justify-between">5 stars <hr className="w-[85%] border border-[#707070]" /> {fiveStarsPersent.length == 3 ? fiveStarsPersent : fiveStarsPersent + "." + "0".repeat(3 - fiveStarsPersent.length)} %</p>
                <p className="whitespace-nowrap flex gap-3 items-center justify-between">4 stars <hr className="w-[85%] border border-[#707070]" /> {fourStarsPersent.length == 3 ? fourStarsPersent : fourStarsPersent + "." + "0".repeat(3 - fourStarsPersent.length)} %</p>
                <p className="whitespace-nowrap flex gap-3 items-center justify-between">3 stars <hr className="w-[85%] border border-[#707070]" /> {threeStarsPersent.length == 3 ? threeStarsPersent : threeStarsPersent + "." + "0".repeat(3 - threeStarsPersent.length)} %</p>
                <p className="whitespace-nowrap flex gap-3 items-center justify-between">2 stars <hr className="w-[85%] border border-[#707070]" /> {twoStarsPersent.length == 3 ? twoStarsPersent : twoStarsPersent + "." + "0".repeat(3 - twoStarsPersent.length)} %</p>
                <p className="whitespace-nowrap flex gap-3 items-center justify-between">1 stars <hr className="w-[85%] border border-[#707070]" /> {oneStarPersent.length == 3 ? oneStarPersent : oneStarPersent + "." + "0".repeat(3 - oneStarPersent.length)} %</p>
            </div>
        </div>
    )
}