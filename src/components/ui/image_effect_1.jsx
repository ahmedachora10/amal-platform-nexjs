import Image from "next/image";
import Image2 from "../../app/images/about/2.png";
import Mask from "../../app/images/about/mask.png";
import Image4 from "../../app/images/about/4.png";

export default function ImageEffect1() {
    return (
        <>
            <Image src={Image2} className="absolute max-w-[2rem] top-[25%] left-[10%]" draggable={false} />
            <Image src={Mask} className="absolute max-w-[2rem] top-[25%] left-[10%] z-50 opacity-40 -translate-x-1 -translate-y-1" draggable={false} />
            <Image src={Image2} className="absolute max-w-[2rem] bottom-[25%] right-[7%]" draggable={false} />
            <Image src={Image4} className="absolute max-w-[5rem] top-0 right-0 z-50 opacity-40 -translate-x-[0%] translate-y-1" draggable={false} />
        </>
    )
}