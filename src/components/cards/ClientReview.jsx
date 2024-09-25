import IconCover from "../ui/icon_cover";

export default function ClientReview({ reviewText = "", imageURL = "", imageComponent = <></>, name = "", subtitle = "" }) {
    return (
        <div className="xl:max-w-[29.69vw] p-7 flex flex-col gap-3 bg-white">
            <div className="flex gap-2">
                <div className="max-h-[70px] max-w-[70px] rounded-full">
                    {imageURL ? <img src={imageURL} className="w-full h-full" draggable={false} /> : imageComponent}
                </div>

                <div className="flex flex-col gap-3">
                    <h6 className="font-bold">{name}</h6>
                    <p className="">{subtitle}</p>
                </div>
            </div>

            <div>
                <p>{reviewText}</p>
            </div>
        </div>
    )
}