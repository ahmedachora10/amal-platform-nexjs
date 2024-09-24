'use client';
import Image from "next/image";
import Facebook from "../../app/images/contact/facebook.png";
import Twitter from "../../app/images/contact/twitter.png";
import Google from "../../app/images/contact/google.png";
import Linkedin from "../../app/images/contact/linkedin.png";
import P from "../../app/images/contact/p.png";

export default function ContactIcons() {
    return (
        <div className="flex gap-8">

            <div className="contact-icon">
                <Image src={Facebook} draggable={false} />
            </div>

            <div className="contact-icon">
                <Image src={Twitter} draggable={false} />
            </div>

            <div className="contact-icon">
                <Image src={Google} draggable={false} />
            </div>

            <div className="contact-icon">
                <Image src={Linkedin} draggable={false} />
            </div>

            <div className="contact-icon">
                <Image src={P} draggable={false} />
            </div>

        </div>
    )
}