import Group5 from "@/app/images/components/Group 5.png";
import ContactIcons from "../ui/contact_icons";
import Image from "next/image";

export default function Contact({logo, description}) {
    return (
        <div className={"p-7 shadow bg-white border-t-[5px] border-[#010B1F] flex flex-col gap-7 justify-center w-full md:max-w-[300px]"}>
            <div className="text-center text-lg flex flex-col justify-center items-center gap-1">
                <Image src={logo} alt="logo" width={70} height={70} />
            </div>

            <p className="text-center text-sm/[14px] text-gray-700"> {description} </p>

            <div className="flex justify-center items-center">
                <ContactIcons />
            </div>
        </div>
    )
}