import Image from "next/image";

/**
 * @param {{data: import("@/types/static/home").SliderData[]}} param0
 */
export default function Sliders({ data }) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {
                data.map((img, i) => (
                    <div className="relative col-span-1" key={i}>
                        <Image src={img.image} alt="test" width={400} height={400} style={{'height' : i == 1 || i == 2 ? '220px' : '180px'}} draggable={false} className={i == 0 ? "w-full" : i == 3 ? "w-full" : undefined} />
                        <Image src={img.icon} alt="test" width={40} height={40} draggable={false} className={"absolute z-10 " + (i == 0 || i == 3 ? '-top-2 ' : 'top-6 ') + ((i + 1) % 2 == 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2")} />
                    </div>
                ))
            }
        </div>
    )
}