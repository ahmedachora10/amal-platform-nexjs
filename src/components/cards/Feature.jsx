'use client'

import Image from "next/image";

export default function Feature({icon = '', title = '', description = ''}) {
    return (
        <div className="card bg-gray-100 flex items-center flex-col pt-[3rem] pb-[6rem] px-[3rem] rounded mt-6 text-center border-3">
            <div className="bg-primary rounded-full p-5 w-[80px] h-[80px] flex item-center justify-center">
                <Image src={icon} alt={title} width="30px" height="30px"/>
            </div>
            <h3 className="my-6 text-black text-lg font-bold">{title}</h3>
            <p className="text-black-200 text-sm text-gray-500">{ description }</p>
        </div>
    );
}