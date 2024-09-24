import Image from "next/image";

export default function ContactPeace({ title = "", content = "", image = undefined, imageNode = undefined }) {
    return (
        <div className="flex gap-2 bg-[#F0F4F9] border border-transparent hover:border-[#084C94] py-3 px-4">
            <div className="bg-[#03A9F5] h-fit w-fit p-2 rounded-full text-white">
                {
                    imageNode ? imageNode : image ? <Image src={image} /> : undefined
                }
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-lg font-bold">{title}</h4>
                <p>{content}</p>
            </div>

        </div>
    )
}