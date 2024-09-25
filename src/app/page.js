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
import Bg3 from "./images/home/clients-reviews-section-bg.svg";
import ScienceImg from "./images/home/Science.png";
import ScholarImg from "./images/home/Scholar.png";
import BookGroupImg from "./images/home/Group 13428.png";
import TextSection from "@/components/sections/text_section";
import TitleWithLine from "@/components/title_with_line";
import TextWithYelloTrue from "@/components/yellow_true_txt";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import ClientReview from "@/components/cards/ClientReview";

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

        <main>
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
        </main>

        <section className="container lg:mx-auto flex lg:flex-row flex-col-reverse items-center gap-7">
          <div className="">
            <Image src={BookGroupImg} />
          </div>

          <div className="flex flex-col lg:max-w-[32.66vw] gap-9">
            <div className="flex flex-col gap-2">
              <TitleWithLine title="about us" />
              <h1 className="lg:text-[47px] text-[30px]">Education in continuing a proud tradition.</h1>
              <p className="text-[#707070]">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph,</p>
            </div>

            <div className="grid xl:grid-cols-2 grid-cols-1 gap-4">
              <TextWithYelloTrue text="Metus interdum metus " />
              <TextWithYelloTrue text="Nec dapibus sit" />
              <TextWithYelloTrue text="Ligula curabitur maecenas" />
              <TextWithYelloTrue text="Vivamus quisque gravida" />
              <TextWithYelloTrue text="Fringilla nulla" />
              <TextWithYelloTrue text="Pellentesque sodales rhoncus" />
            </div>

            <Button variant="outline" className="w-fit font-bold px-7"><Link href="/about">Read More</Link></Button>
          </div>

        </section>

        <section>
          <TitleWithLine title="Features" />

          <div className="lg:hidden">
            <Carousel className="flex">
              <CarouselContent>

                <CarouselItem>
                  <div className="col-3 mx-3">
                    <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="col-3 mx-3">
                    <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="col-3 mx-3">
                    <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="col-3 mx-3">
                    <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="hidden lg:flex">

            <div className="col-3 mx-3">
              <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
            </div>

            <div className="col-3 mx-3">
              <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
            </div>

            <div className="col-3 mx-3">
              <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
            </div>

            <div className="col-3 mx-3">
              <Feature icon={icon} title="Global Certificate" description=" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo" />
            </div>

          </div>



        </section>

        <section className="container mx-auto bg-[#EBF3FF] p-7">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Our Top Online Courses</h1>
            <Button>View All</Button>
          </div>
          <BestSellingCourses />
        </section>


        <section className="bg-[#EBF3FF] px pt-7 pb-50 lg:pb-52 mb-[50%] lg:mb-0 relative">

          <div className="flex justify-center items-center overflow-hidden absolute w-full h-full">
            <Image draggable={false} src={Bg3} className="max-w-[100vw] w-[116.93%]" />
          </div>

          <div className="flex flex-col gap-9 w-full mt-10 p-7">

            <div className="flex grow flex-col items-center gap-7">

              <div className="flex gap-4">
                <TitleWithLine />
                <TitleWithLine title="Client Testimonials" />
              </div>

              <h1 className="text-3xl">What our clients say</h1>
            </div>

            <div className="flex grow gap-4 justify-evenly flex-col lg:flex-row z-10">
              <ClientReview imageComponent={<Image src={Bg1} />} name="Eugene Freeman" subtitle="Tincidunt" reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos" />
              <ClientReview imageComponent={<Image src={Bg1} />} name="Kelly Coleman" subtitle="Nulla nec" reviewText="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos" />
            </div>
          </div>

        </section>
      </div>
    </div>
  );
}
