import UserPositionSection from "@/components/sections/user_position_section";
import { StaticPagesApi } from "@/api/static";
import AboutSection from "@/components/sections/about/section";
import AboutFaqs from "@/components/sections/about/faqs";

export default async function AboutPage() {
    const data = await StaticPagesApi.about();
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <UserPositionSection pageName="About Us" position="Home | About Us" />

            <AboutSection data={data.about[0]} />
            <AboutSection data={data.about[1]} reverse />

            <section className="flex flex-col sm:flex-row gap-7 justify-between items-center w-screen container mx-7 sm:mx-auto">
                <div className="sm:w-[20.89%]">
                    <h1 className="text-2xl">FAQs</h1>

                    <p className="text-sm">
                        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
                    </p>

                </div>

                <div className="sm:w-[45.21%] flex flex-col gap-3 w-full">
                    <AboutFaqs data={data.faqs} />
                </div>
            </section>
        </div>
    )
}