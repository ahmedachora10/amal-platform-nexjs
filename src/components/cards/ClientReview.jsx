import { Star } from "lucide-react";

export default function ClientReview({
  reviewText = "",
  name = "",
  rate = 0,
  noMaxWidth = false,
}) {
  return (
    <div
      className={`${
        noMaxWidth ? "" : "xl:max-w-[29.69vw]"
      } mt-6 p-2 flex flex-col gap-5 bg-white`}
    >
      <div className="flex gap-4">
        <div className="flex flex-col justify-center gap-1">
          <h6 className="flex font-bold">
            {name}
            <span className="inline-flex items-center gap-1 text-sm ms-4">
              <Star className="text-yellow-500" />
              <p className="text-yellow-500">{rate.toString()}</p>
            </span>
          </h6>
          <p className="text-sm">{reviewText}</p>
        </div>
      </div>
    </div>
  );
}
