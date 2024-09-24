'use client'

import Link from "next/link";
import { Button } from "./ui/button";

export default function HeadlineWithLink({title = '', link = '/', linkName = ''}) {
    return (
        <div className="flex justify-between items-align">
            <h1 className="text-3xl text-black-800 font-extrabold mt-3">{title}</h1>
            <Button variant="outline" className="bg-primary text-white px-[2rem] py-4" asChild>
                <Link href={link}>
                    {linkName}
                </Link>
            </Button>
        </div>
    );
}