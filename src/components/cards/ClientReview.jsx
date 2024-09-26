import { Star } from "lucide-react";

export default function ClientReview({ reviewText = "", imageURL = "", imageComponent = <></>, name = "", subtitle = "", rate = 0, noMaxWidth = false }) {
    return (
        <div className={`${noMaxWidth ? "" : "xl:max-w-[29.69vw]"} p-7 flex flex-col gap-5 bg-white`}>
            <div className="flex gap-3">
                <div className="max-h-[70px] max-w-[70px] rounded-full">
                    {imageURL ? <img src={imageURL} className="w-full h-full" draggable={false} /> : imageComponent}
                </div>

                <div className="flex flex-col justify-center gap-1">
                    <h6 className="font-bold flex gap-7">
                        {name}
                        <span className="inline-flex gap-4 text-sm items-center">
                            <Star className="text-yellow-500" />
                            <p>{rate.toString()}</p>
                        </span>
                    </h6>
                    <p className="font-sans">{subtitle}</p>
                </div>
            </div>

            <div>
                <p className="text-sm">{reviewText}</p>
            </div>
        </div>
    )
}