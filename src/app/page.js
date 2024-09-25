import Image from "next/image";
import { Button } from "@/components/ui/button";
import Headline from "@/components/Headline";
import Feature from "@/components/cards/Feature";
import icon from './test.jpeg';
import HeadlineWithLink from "@/components/HeadlineWithLink";
import Course from "@/components/cards/Course";
import BestSellingCourses from "@/components/sections/BestSellingCourses";
import Bg1 from "./images/home/bg-1.png";
import Bg2 from "./images/home/bg-2.png";
import ScienceImg from "./images/home/Science.png";
import ScholarImg from "./images/home/Scholar.png";
import TextSection from "@/components/sections/text_section";

export default function Home() {
  return (
    <div>
      <div className='container mx-auto flex flex-col gap-14'>
        {/* <Headline title="Platform Features" subTitle="Features" /> */}
        {/* <HeadlineWithLink title="Platform Features" linkName="Features" link="/" /> */}

        {/* <div className="flex justify-between items-center">
          <div className="col-4">
            <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
          </div>
          <div className="col-4">
            <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
          </div>
          <div className="col-4">
            <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
          </div>
          <div className="col-4">
            <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
          </div>
        </div> */}

        <section className="container mx-auto justify-between flex flex-col xl:flex-row relative">
          <Image src={Bg1} className="absolute top-0 left-0 -translate-x-[25%] -translate-y-[25%]" draggable={false} />

          <div className="xl:w-[40.83%] flex flex-col items-center gap-7">
            <h1 className="xl:text-[80px] text-[40px] font-bold">Learn Arabic with us from the best.</h1>
            <p className="xl:text-[24px] text-[16px] text-[#707070]">We help your student study better with their own pace. Join us in our mission to create a better future for the kids.</p>
            <div className="flex items-start w-full">
              <Button className="xl:w-[12.5vw] w-fit">Get Started</Button>
            </div>
          </div>

          <div className="xl:w-[41.72%] z-10 xl:translate-y-[20%] flex justify-center">
            <Image src={Bg2} draggable={false} />
          </div>
        </section>


        <section className="bg-[#EBF3FF] px-7 pb-7 pt-80 -translate-y-[50%] xl:-translate-y-[0%] xl:p-7">
          <div className="container mx-auto xl:flex grid grid-cols-2 gap-7">

            <div className="xl:max-w-[12.5%] flex flex-col gap-4">
              <Image src={ScholarImg} />
              <TextSection title="Arabic Grammer" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>

            <div className="xl:max-w-[12.5%] flex flex-col gap-4">
              <Image src={ScienceImg} />
              <TextSection title="Sharia sciences" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>

          </div>
        </section>

        <section className="container mx-auto bg-[#EBF3FF] p-7 -translate-y-[50%] xl:-translate-y-[0%]">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Our Top Online Courses</h1>
            <Button>View All</Button>
          </div>
          <BestSellingCourses />
        </section>

        {/* <div className="flex">
          <div className="col-3 mx-3">
            <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo"/>
          </div>
          <div className="col-3 mx-3">
            <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo"/>
          </div>
          <div className="col-3 mx-3">
            <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo"/>
          </div>
          <div className="col-3 mx-3">
            <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo"/>
          </div>
        </div> */}
      </div>
    </div>
  );
}
