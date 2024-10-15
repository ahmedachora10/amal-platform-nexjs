import Image from "next/image";
import { Button } from "@/components/ui/button";
import Bg1 from "../images/home/bg-1.png";
import ScienceImg from "../images/home/Science.png";
import ScholarImg from "../images/home/Scholar.png";
import TextSection from "@/components/sections/text_section";
import { StaticPagesApi } from "@/api/static";
import AboutUs from "@/components/sections/home/AboutUs";
import Features from "@/components/sections/home/features";
import Reviews from "@/components/sections/home/reviews";
import Courses from "@/components/sections/home/courses";
import Sliders from "@/components/cards/sliders";
import ViewAllCoursesButton from "@/components/ViewAllCoursesButton";
import Headline from "@/components/Headline";

export default async function Home() {
  const data = await StaticPagesApi.home();

  return (
    <div>
      <div className='container mx-auto px-2 flex flex-col gap-14'>

        <main className="flex flex-col lg:gap-16 gap-5">
          <section className=" justify-between flex flex-col xl:flex-row relative">
            <Image src={Bg1} className="absolute top-0 left-0 -translate-x-[25%] -translate-y-[25%]" draggable={false} alt="" />

            <div className="grid grid-cols-8 gap-6">
                <div className="md:col-span-4 col-span-full flex flex-col items-center gap-5 lg:mt-[7rem] mt-[3rem]">
                  <h1 className="xl:text-[70px] lg:text-[60px] sm:text-[50px] text-[40px] leading-none font-bold">Learn Arabic with us from the best.</h1>
                  <p className="xl:text-[21px] lg:text-[18px] leading-normal text-[16px] text-[#707070]">We help your student study better with their own pace. Join us in our mission to create a better future for the kids.</p>
                  <div className="flex items-start w-full">
                    <Button className="xl:w-[12.5vw] w-fit py-6">Get Started</Button>
                  </div>
              </div>

              <div className="md:col-span-4 col-span-full z-10 xl:translate-y-[20%] translate-y-[10%] flex justify-center md:mt-[3rem]">
                <Sliders data={data.sliders} />
              </div>
            </div>
          </section>


          <section className="bg-[#EBF3FF] px-7 pb-7 lg:pt-50 pt-20 lg:-translate-y-[40%] -translate-y-[10%] xl:-translate-y-[0%] xl:p-7">
            <div className=" xl:flex grid grid-cols-2 gap-7">

              <div className="xl:max-w-[12.5%] flex flex-col gap-4">
                <Image src={ScholarImg} alt="image" />
                <TextSection title="Arabic Grammer" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>

              <div className="xl:max-w-[12.5%] flex flex-col gap-4">
                <Image src={ScienceImg} alt="image" />
                <TextSection title="Sharia sciences" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>

            </div>
          </section>
        </main>

        <AboutUs data={data.about || {}} />
        <Features data={data.features} />


        <section className="bg-[#EBF3FF] p-7 flex flex-col gap-4">
          <div className="flex justify-between">
            {/* <h1 className="text-3xl font-bold"></h1> */}
            <Headline title="Our Top Online Courses" />
            <ViewAllCoursesButton />
          </div>

          <Courses data={data.bestSellingListCourses || []} />
        </section>

        <Reviews data={data.testimonials || []} />
      </div>
    </div>
  );
}
