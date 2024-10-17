"use client";
import useSettings from "@/app/_hook/useSettings";
import Contact from "../cards/Contact";
import FooterGroup from "../ui/footer_group";
import IconCover from "../ui/icon_cover";
import { Mail, MapPin, Phone } from "lucide-react";
import { StaticPagesApi } from "@/api/static";
import { useState } from "react";

export default function Footer() {
  const { settings } = useSettings();
  const info = {
    logo: settings("logo"),
    description: settings("app_description"),
  };
  const [categories, setCategories] = useState([]);
  StaticPagesApi.getCategories().then((res) => setCategories(res));
  return (
    <footer className="px-4 sm:py-[3rem] mt-52 bg-blue-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-full md:col-span-6 lg:col-span-4 -translate-y-[25%] grow flex justify-center">
            <Contact logo={info.logo} description={info.description} />
          </div>
          <div className="grid gap-10 grid-cols-4 col-span-full  md:col-span-6 lg:col-span-5">
            <FooterGroup
              title="Contact Us"
              links={[
                {
                  link: "",
                  linkText:
                    settings("address") ||
                    "66 broklyant, new York India 3269 road.",
                  iconComponent: <MapPin className="text-blue-600" />,
                },
                {
                  link: "",
                  linkText: settings("email"),
                  iconComponent: <Mail className="text-blue-600" />,
                },
                {
                  link: "tel:" + settings("phone"),
                  linkText: settings("phone"),
                  iconComponent: <Phone className="text-blue-600" />,
                },
              ]}
            />

            <FooterGroup
              className="grid gap-10 grid-cols-4"
              title="Course"
              links={categories?.map((item, index) => {
                // const color = index == 0 ?  '#03A9F5': '#707070';
                return {
                  link: `courses?categoryId=${item.id}`,
                  linkText: item.name,
                  iconComponent: (
                    <div className="w-1 h-1 rounded-full bg-[#707070]"></div>
                  ),
                };
              })}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
