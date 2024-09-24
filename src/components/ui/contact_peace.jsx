import Image from "next/image";

export default function ContactPeace({ title = "", content = "", image = undefined }) {
    return (
        <div className="flex gap-2 bg-[#F0F4F9] border border-transparent hover:border-[#084C94] py-3 px-4">
            <Image src={image} />

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold">{title}</h4>
                <p>{content}</p>
            </div>

        </div>
    )
}