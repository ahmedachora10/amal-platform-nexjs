import UserPositionSection from "@/components/sections/user_position_section";
import ContactIcons from "@/components/ui/contact_icons";
import { Button } from "@/components/ui/button";
import MaskGroup15 from "@/app/images/contact/Mask Group 15.png";
import Image from "next/image";
import ContactPeaces from "@/components/cards/Contact_peaces";
import TitleWithLine from "@/components/title_with_line";

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-10 overflow-hidden">
            <UserPositionSection pageName="Contact Us" position="Home | Contact Us" />
            <section className="container sm:mx-auto mx-7 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
                <ContactPeaces />
            </section>

            <section className="flex flex-col sm:flex-row justify-between items-center gap-10 container sm:mx-auto mx-7">
                <div className="flex flex-col gap-7 font-sans sm:w-[19.27%]">
                    <TitleWithLine title="GET IN TOUCH" />
                    <h1 className="text-3xl font-bold">Write Us a Message</h1>
                    <p className="text-sm">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog,</p>
                    <ContactIcons />
                </div>

                <div className="sm:w-[40.10%] flex">
                    <form className="grid grid-cols-2 grow gap-4">
                        <input className="p-3 border border-[#084C94] outline-none rounded-md" placeholder="Full Name" />
                        <input className="p-3 border border-[#084C94] outline-none rounded-md" placeholder="Phone Number" />
                        <input className="p-3 border border-[#084C94] outline-none rounded-md" placeholder="Email Address" />
                        <input className="p-3 border border-[#084C94] outline-none rounded-md" placeholder="Subject" />
                        <textarea className="p-3 min-h-40 border border-[#084C94] outline-none rounded-md col-span-2" placeholder="Your Message" />
                        <Button className="col-span-2 w-fit rounded-lg">Send Message</Button>
                    </form>
                </div>
            </section>

            <Image src={MaskGroup15} draggable={false} />
        </div>
    )
}