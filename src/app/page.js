import Image from "next/image";
import { Button } from "@/components/ui/button";
import Headline from "@/components/Headline";
import Feature from "@/components/cards/Feature";
import icon from './test.jpeg';
import HeadlineWithLink from "@/components/HeadlineWithLink";
import Course from "@/components/cards/Course";
import BestSellingCourses from "@/components/sections/BestSellingCourses";

export default function Home() {
  return (
    <div>
      <div className='container mx-auto'>
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

        <div className="container mx-auto">
          <BestSellingCourses />
        </div>

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
