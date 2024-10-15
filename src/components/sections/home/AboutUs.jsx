import Headline from "@/components/Headline";
import TitleWithLine from "@/components/title_with_line";
import { Button } from "@/components/ui/button";
import TextWithYelloTrue from "@/components/yellow_true_txt";
import Image from "next/image";
import Link from "next/link";

/**
 * 
 * @param {{data:import("@/types/static/about").About}} param0
 */
export default function AboutUs({ data }) {

    return (
        <section className="container flex flex-col-reverse items-center gap-3 lg:mx-auto lg:flex-row justify-evenly">
            <div className="">
                <Image className="max-w-96" src={data?.image} alt={data.title} width={480} height={490} style={{'height' : '500px'}} />
            </div>

            <div className="flex flex-col lg:max-w-[32.66vw] gap-9">
                <div className="flex flex-col gap-2">
                    <TitleWithLine title={"About Us"} />
                    <Headline title={data.title} />
                    <p className="text-[#707070] mt-3 text-md">{data?.description}</p>
                </div>

                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                    {data?.properties?.map((prop, i) => (
                        <TextWithYelloTrue key={i} text={prop} />
                    ))}
                </div>

                <Button variant="outline" className="font-bold w-fit px-7"><Link href="/about">Read More</Link></Button>
            </div>

        </section>
    )
}