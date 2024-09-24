import OpenBox from "@/components/ui/open_box";
import Image1 from "../images/about/1.png";
import Image2 from "../images/about/2.png";
import Mask from "../images/about/mask.png";
import Image4 from "../images/about/4.png";
import girlDoingHomework1 from "../images/about/girl-doing-homework1.png";
import girlDoingHomework2 from "../images/about/girl-doing-homework2.png";
import YellowTrue from "../images/about/yellow-true.png";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <section className="flex flex-col gap-3 justify-center items-center bg-[#F2F7FD] w-screen min-h-[15vh] relative">
                <Image src={Image2} className="absolute max-w-[2rem] top-[25%] left-[10%]" draggable={false} />
                <Image src={Mask} className="absolute max-w-[2rem] top-[25%] left-[10%] z-50 opacity-40 -translate-x-1 -translate-y-1" draggable={false} />
                <Image src={Image2} className="absolute max-w-[2rem] bottom-[25%] right-[7%]" draggable={false} />
                <Image src={Image4} className="absolute max-w-[5rem] top-0 right-0 z-50 opacity-40 -translate-x-[0%] translate-y-1" draggable={false} />
                <h2 className="text-2xl">About Us</h2>
                <p className="text-xs">Home | About Us</p>
            </section>

            <section className="flex justify-between items-center w-screen container mx-auto">
                <div className="w-[29.48vw]">
                    <h1 className="text-2xl">Welcome to</h1>
                    <h1 className="text-2xl">Arabic <span className="text-[#03A9F5]">Essentials</span></h1>
                    <p>
                        Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                        Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                    </p>
                </div>

                <Image src={girlDoingHomework1} className="w-[29.48%]" />
            </section>

            <section className="flex flex-row-reverse justify-between items-center w-screen container mx-auto">
                <div className="flex flex-col gap-7">
                    <div className="w-[29.48vw]">
                        <h1 className="text-2xl">Our Mission</h1>

                        <p>
                            Morbi vel augue et metus pellentesque lacinia eu non odio. Sed id purus urna. Maecenas ultrices ligula a nisi dictum tristique. Suspendisse potenti. Curabitur egestas ultrices sem, eu vestibulum leo sagittis et.
                        </p>

                    </div>

                    <div className={"[&>p]:flex [&>p]:gap-3 flex flex-col gap-7"}>
                        <p>
                            <Image src={YellowTrue} />
                            <span>Etiam ante nisl, maximus vitae sem non, dignissim</span>
                        </p>

                        <p>
                            <Image src={YellowTrue} />
                            <span>Donec blandit, sapien eu porttitor blandit</span>
                        </p>

                        <p>
                            <Image src={YellowTrue} />
                            <span>Sed at urna at massa viverra feugiat non </span>
                        </p>
                    </div>
                </div>
                <Image src={girlDoingHomework2} className="w-[29.48%]" />
            </section>

            <section className="flex justify-between items-center w-screen container mx-auto">
                <div className="w-[20.89%]">
                    <h1 className="text-2xl">FAQs</h1>

                    <p className="text-sm">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
                    </p>

                </div>

                <div className="w-[45.21%] flex flex-col gap-3">
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