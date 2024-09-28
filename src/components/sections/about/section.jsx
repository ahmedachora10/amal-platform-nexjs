import TextWithYelloTrue from "@/components/yellow_true_txt";

/**
 * @param {{data: import("@/types/static/about").About}} props
 */
export default function AboutSection({ data, reverse = false }) {
    return (
        data ? <section className={`flex flex-col gap-7 ${reverse ? "sm:flex-row-reverse" : "sm:flex-row"} justify-between items-center w-screen container mx-7 sm:mx-auto`}>
            <div className="flex flex-col gap-7">
                <div className="sm:w-[29.48vw]">
                    <h1 className="text-2xl">{data?.title}</h1>

                    <p className="text-md font-sans">
                        {data?.description}
                    </p>

                </div>

                <div className={"[&>p]:flex [&>p]:gap-3 flex flex-col gap-7"}>
                    {data?.properties.map((val, i) => (
                        <TextWithYelloTrue text={val} key={i} />
                    ))}
                </div>
            </div>


            <img src={data?.image} className="sm:w-[29.48%]" />

        </section> : null
    )
}