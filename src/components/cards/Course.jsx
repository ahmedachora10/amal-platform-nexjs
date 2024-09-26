import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Course({
    image = "",
    category = "",
    title = "",
    price = 0,
    rating = 0,
    link = '/',
    subscriptions = 0
}) {
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
                <Button variant="outline" className="text-gray rounded-bl-xl text-xs" asChild>
                    <Link href='/'>
                        More Details
                    </Link>
                </Button>
                <Button variant="outline" className="bg-primary text-white rounded-br-xl text-xs" asChild>
                    <Link href='/'>
                        Buy Now
                    </Link>
                </Button>
            </div>
        </div>
    );
}
