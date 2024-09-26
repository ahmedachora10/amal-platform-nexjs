/**
 * @param {{data: import("@/types/static/home").SliderData[]}} param0
 */
export default function Sliders({ data }) {
    return (
        <div className="grid grid-cols-2 gap-3">
            {
                data.map((img, i) => (
                    <div className="relative" key={i}>
                        <img src={img.image} draggable={false} className={i == 0 ? "h-[80%] mt-[20%] w-full" : i == 3 ? "h-[80%] w-full" : undefined} />
                        <img src={img.icon} draggable={false} className={"absolute z-10 top-6 " + ((i + 1) % 2 == 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2")} />
                    </div>
                ))
            }
        </div>
    )
}