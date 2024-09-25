import OpenBox from "@/components/ui/open_box";
import girlDoingHomework1 from "../images/about/girl-doing-homework1.png";
import girlDoingHomework2 from "../images/about/girl-doing-homework2.png";
import Image from "next/image";
import UserPositionSection from "@/components/sections/user_position_section";
import TextWithYelloTrue from "@/components/yellow_true_txt";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <UserPositionSection pageName="About Us" position="Home | About Us" />

            <section className="flex flex-col gap-7 sm:flex-row justify-between items-center w-screen container mx-7 sm:mx-auto">
                <div className="sm:w-[29.48vw]">
                    <h1 className="text-2xl">Welcome to</h1>
                    <h1 className="text-2xl">Arabic <span className="text-[#03A9F5]">Essentials</span></h1>

                    <p>
                        Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                        Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                    </p>
                </div>

                <Image src={girlDoingHomework1} className="sm:w-[29.48%]" />
            </section>

            <section className="flex flex-col gap-7 sm:flex-row-reverse justify-between items-center w-screen container mx-7 sm:mx-auto">
                <div className="flex flex-col gap-7">
                    <div className="sm:w-[29.48vw]">
                        <h1 className="text-2xl">Our Mission</h1>

                        <p>
                            Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                        </p>

                    </div>

                    <div className={"[&>p]:flex [&>p]:gap-3 flex flex-col gap-7"}>
                        <TextWithYelloTrue text="Etiam ante nisl, maximus vitae sem non, dignissim" />
                        <TextWithYelloTrue text="Donec blandit, sapien eu porttitor blandit" />
                        <TextWithYelloTrue text="Sed at urna at massa viverra feugiat non" />
                    </div>
                </div>
                <Image src={girlDoingHomework2} className="sm:w-[29.48%]" />
            </section>

            <section className="flex flex-col sm:flex-row gap-7 justify-between items-center w-screen container mx-7 sm:mx-auto">
                <div className="sm:w-[20.89%]">
                    <h1 className="text-2xl">FAQs</h1>

                    <p className="text-sm">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
                    </p>

                </div>

                <div className="sm:w-[45.21%] flex flex-col gap-3 w-full">
                    <OpenBox title="01.  What does you do?" content="hello world 1" />
                    <OpenBox title="02.  What does you do?" />
                    <OpenBox title="03.  Why we are the best?" />
                    <OpenBox title="04.  What is industries covered?" content="The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex!" />
                    <OpenBox title="04.  What does you do?" />
                </div>
            </section>
        </div>
    )
}