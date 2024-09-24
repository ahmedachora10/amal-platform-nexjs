'use client';
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function OpenBox({ content = "", title = "", arrow = "right", open = false }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div className={"flex flex-col gap-3 border hover:shadow-sm transition-all"}>
            <div className={"flex justify-between w-full py-3 px-4 " + (isOpen ? "bg-black text-white rounded-t-xl" : "")}>
                <p>{title}</p>

                <span onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                    {isOpen ? (
                        <ArrowDown />
                    ) : (
                        arrow == "right" ? (
                            <ArrowRight />
                        ) : (
                            <ArrowLeft />
                        )
                    )}
                </span>
            </div>

            <div className={"transition-all p-4 text-sm " + (isOpen ? "" : "hidden")}>
                {content}
            </div>
        </div>
    )
}