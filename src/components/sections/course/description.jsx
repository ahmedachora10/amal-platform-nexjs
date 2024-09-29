import TextWithYelloTrue from "@/components/yellow_true_txt";
import TextSection from "../text_section";

/**
 * 
 * @param {{data: import("@/types/static/global").Course}} param0 
 * @returns 
 */
export default function CourseDescriptionSection({ data }) {

    return (
        <section className="w-full flex flex-col gap-11">
            <div className="text-sm flex flex-col items-center">
                <TextSection content={data.description} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 text-sm gap-4">
                {data.properties?.map((prop, i) => (
                    <TextWithYelloTrue key={i} text={prop} />
                ))}
            </div>

        </section>
    )
}