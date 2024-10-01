import Feature from "@/components/cards/Feature";
import TitleWithLine from "@/components/title_with_line";
import Carousel from "./Carousel";

/**
 * 
 * @param {{data: import("@/types/static/global").Feature[]}} param0 
 */
export default function Features({ data }) {
    return (

        <section>
            <TitleWithLine title="Features" />

            <div className="lg:hidden">
                <Carousel slides={Children({ data })}></Carousel>
            </div>

            <div className="hidden lg:flex">
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
        <div className="col-3 mx-3 min-w-[300px]" key={i}>
            <Feature icon={value.image} title={value.name} description={value.description} />
        </div>
    ))


}