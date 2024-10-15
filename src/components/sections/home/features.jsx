import Feature from "@/components/cards/Feature";
import TitleWithLine from "@/components/title_with_line";
import Carousel from "./Carousel";
import Headline from "@/components/Headline";

/**
 * 
 * @param {{data: import("@/types/static/global").Feature[]}} param0 
 */
export default function Features({ data }) {
    return (

        <section>
            <TitleWithLine title="Features" />
            <Headline title="Platform Featrues" />

            <div className="flex flex-wrap sm:justify-start justify-center">
                <Children data={data} />
            </div>
        </section>
    )
}
/**
 * 
 * @param {{data: import("@/types/static/global").Feature[],carouselItem: boolean}} param0 
 */
function Children({ data }) {
    return data?.map((value, i) => (
        <div className="lg:col-3 md:col-4 sm:col-6 col-12 mx-3 lg:min-w-[290px] md:min-w-[300px] sm:min-w-[250px] min-w-[300px]" key={i}>
            <Feature icon={value.image} title={value.name} description={value.description} />
        </div>
    ))


}