'use client';
import Image from "next/image";
import Facebook from "../../app/images/contact/facebook.png";
import Twitter from "../../app/images/contact/twitter.png";
import Google from "../../app/images/contact/google.png";
import Linkedin from "../../app/images/contact/linkedin.png";
import P from "../../app/images/contact/p.png";
import useSettings from "@/app/_hook/useSettings";
import Link from "next/link";

export default function ContactIcons() {
    const {settings} = useSettings();
    return (
        <div className="flex gap-8">

            <div className="contact-icon">
                <Link href={settings('facebook') || ''} asChild>
                    <Image src={Facebook} draggable={false} />
                </Link>
            </div>

            <div className="contact-icon">
                <Link href={settings('twitter') || ''} asChild>
                <Image src={Twitter} draggable={false} />
                </Link>
            </div>

            <div className="contact-icon">
                <Link href={settings('email') || ''} asChild>
                <Image src={Google} draggable={false} />
                </Link>
            </div>

            <div className="contact-icon">
                <Link href={settings('linkedin') || ''} asChild>
                <Image src={Linkedin} draggable={false} />
                </Link> 
            </div>

            <div className="contact-icon">
                <Link href={settings('facebook') || ''} asChild>
                <Image src={P} draggable={false} />
                </Link>
            </div>

        </div>
    )
}