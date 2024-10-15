import YellowTrue from "@/app/images/about/yellow-true.png";
import Image from "next/image";

export default function TextWithYelloTrue({ text = "" }) {
    return (
        <p className="flex gap-3">
            <Image src={YellowTrue} alt="properties" width={24} height={24} draggable={false} className={"min-w-[24px] min-h-[24px] max-w-[24px] max-h-[24px]"} />
            <span className="text-sm">{text} </span>
        </p>
    )
}