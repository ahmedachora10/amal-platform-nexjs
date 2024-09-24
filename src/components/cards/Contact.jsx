import Group5 from "@/app/images/components/Group 5.png";
import ContactIcons from "../ui/contact_icons";
import Image from "next/image";

export default function Contact() {
    return (
        <div className={"p-7 shadow bg-white border-t-[5px] border-[#010B1F] flex flex-col gap-7 justify-center lg:max-w-[19.27vw] min-w-96"}>
            <div className="text-center text-lg flex flex-col justify-center items-center gap-1">
                <Image src={Group5} />
                <h1>Arabic <span className="text-[#03A9F5]">Essentials</span></h1>
            </div>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla reprehenderit laboriosam consequatur maiores? Placeat optio omnis, eos saepe totam architecto iste perferendis, suscipit tenetur sequi commodi tempora quisquam consequatur exercitationem.
            </p>

            <div className="flex justify-center items-center">
                <ContactIcons />
            </div>
        </div>
    )
}