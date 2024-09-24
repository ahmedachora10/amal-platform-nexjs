import { Mail, MapPin, Phone } from "lucide-react";
import ContactPeace from "@/components/ui/contact_peace";

export default function ContactPeaces() {
    return (
        <>
            <ContactPeace title="Our Phone" content="000 2324 39493" imageNode={<Phone />} />
            <ContactPeace title="Our Email" content="name@website.com" imageNode={<Mail />} />
            <ContactPeace title="Our Address" content="2 St, Loskia sripur, amukara." imageNode={<MapPin />} />
        </>
    )
}