import { Button } from "@/components/ui/button";
import TextWithYelloTrue from "@/components/yellow_true_txt";
import TitleWithLine from "@/components/title_with_line";
import Link from "next/link";
import Image from "next/image";

/**
 * 
 * @param {{data:import("@/types/static/about").About}} param0
 */
export default function AboutUs({ data }) {

    return (
        <section className="container lg:mx-auto flex lg:flex-row flex-col-reverse items-center gap-7">
            <div className="">
                <Image src={data.image} alt="" width={1024} height={1024} />
            </div>

            <div className="flex flex-col lg:max-w-[32.66vw] gap-9">
                <div className="flex flex-col gap-2">
                    <TitleWithLine title={"About Us"} />
                    <h1 className="lg:text-[47px] text-[30px]">{data.title}</h1>
                    <p className="text-[#707070]">{data.description}</p>
                </div>

                <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
                    {data.properties?.map((prop, i) => (
                        <TextWithYelloTrue key={i} text={prop} />
                    ))}
                </div>

                <Button variant="outline" className="w-fit font-bold px-7"><Link href="/about">Read More</Link></Button>
            </div>

        </section>
    )
}