'use client';
import useSettings from "@/app/_hook/useSettings";
import Contact from "../cards/Contact";
import FooterGroup from "../ui/footer_group";
import IconCover from "../ui/icon_cover";
import { Mail, MapPin, Phone } from "lucide-react";
import { StaticPagesApi } from "@/api/static";
import { useState } from "react";

export default function Footer() {
    const { settings } = useSettings();
    const info = { logo: settings('logo'), description: settings('app_description') };
    const [categories, setCategories] = useState([]);
    StaticPagesApi.getCategories().then(res => setCategories(res));
    return (
        <footer className="flex flex-col lg:flex-row justify-evenly p-4 mt-52">
            <div className="-translate-y-[25%] grow flex justify-center"><Contact logo={info.logo} description={info.description} /></div>

            <div className="flex flex-grow-[2] gap-28 lg:flex-row flex-col items-center lg:items-start">
                <FooterGroup title="Contact Us" links={[
                    {
                        link: "",
                        linkText: "66 broklyant, new York India 3269 road.",
                        iconComponent: <IconCover><MapPin /></IconCover>
                    },
                    {
                        link: "",
                        linkText: settings('email'),
                        iconComponent: <IconCover><Mail /></IconCover>
                    },
                    {
                        link: "",
                        linkText: settings('phone'),
                        iconComponent: <IconCover><Phone /></IconCover>
                    },
                ]} />

                <FooterGroup title="Course" links={categories?.map((item,index) => {
                    // const color = index == 0 ?  '#03A9F5': '#707070';
                    return {
                        link: `courses/${item.id}`,
                        linkText: item.name,
                        iconComponent: <div className="w-1 h-1 rounded-full bg-[#707070]"></div>,
                    };

                })} />
            </div>
        </footer>
    )
}