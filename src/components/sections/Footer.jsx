import Contact from "../cards/Contact";
import FooterGroup from "../ui/footer_group";
import IconCover from "../ui/icon_cover";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="flex flex-col lg:flex-row justify-evenly p-4">
            <div className="-translate-y-[25%] grow flex justify-center"><Contact /></div>

            <div className="flex flex-grow-[2] gap-28 lg:flex-row flex-col items-center lg:items-start">
                <FooterGroup title="Contact Us" links={[
                    {
                        link: "",
                        linkText: "66 broklyant, new York India 3269 road.",
                        iconComponent: <IconCover><MapPin /></IconCover>
                    },
                    {
                        link: "",
                        linkText: "yourmail.@gmail.com",
                        iconComponent: <IconCover><Mail /></IconCover>
                    },
                    {
                        link: "",
                        linkText: "012 345 678 9101",
                        iconComponent: <IconCover><Phone /></IconCover>
                    },
                ]} />

                <FooterGroup title="Course" links={[
                    {
                        link: "",
                        linkText: "Arabic Language",
                        iconComponent: <div className="w-1 h-1 rounded-full bg-[#03A9F5]"></div>
                    },
                    {
                        link: "",
                        linkText: "yourmail.@gmail.com",
                        iconComponent: <div className="w-1 h-1 rounded-full bg-[#707070]"></div>
                    },
                    {
                        link: "",
                        linkText: "012 345 678 9101",
                        iconComponent: <div className="w-1 h-1 rounded-full bg-[#707070]"></div>
                    },
                ]} />
            </div>
        </footer>
    )
}