'use client';
import { Star } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function Course({
    image = "",
    category = "",
    title = "",
    price = 0,
    rating = 0,
    link = '/',
    isSubscribed = false,
    subscriptions = 0
}) {
    const router = useRouter();

    return (
        <div className="bg-white p-4 rounded w-[18rem] border">
            <div className="relative">
                <img src={image} alt={title} className="rounded-xl object-cover" width={255} style={{
                    'height': '145px !important'
                }} />
                <div className="absolute top-0 right-0 p-2 bg-orange-500 rounded-tr-xl px-2 text-blak text-xs font-bold">
                    <Link href={link}>{category}</Link>
                </div>
            </div>
            <div className="flex justify-between items-center py-3">
                <div className="flex justify-start items-center text-sm">
                    <Star size={20} />
                    <span className="ms-2 me-4 text-">{rating}</span>
                    <span className="text-gray-500">({subscriptions} user)</span>
                </div>

                <span className="font-bold text-primary me-1">{price}$</span>
            </div>
            <h5 className="text-sm text-gray-800 font-bold my-3">{category} | {title}</h5>
            <div className="grid gap-1 grid-cols-2 mt-6">
                <Button variant="outline" className="text-gray rounded-bl-xl text-xs cursor-pointer" asChild onClick={() => router.push(link)}>
                    <p>More Details</p>
                </Button>

                <Button variant="outline" className={"text-white rounded-br-xl text-xs " + (isSubscribed ? "hover:bg-primary hover:text-white bg-opacity-90 text-white bg-primary cursor-alias" : "bg-primary")} asChild>
                    <p>{isSubscribed ? "Owned" : "Buy Now"}</p>
                </Button>
            </div>
        </div>
    );
}
