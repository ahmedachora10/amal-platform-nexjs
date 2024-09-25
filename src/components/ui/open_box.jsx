'use client';
import { ArrowDown, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function OpenBox({ content = "", title = "", arrow = "right", open = false, className = "", openClassName = "", children = undefined }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div className={"flex flex-col gap-3 border hover:shadow-sm transition-all"}>
            <div className={"flex justify-between w-full py-3 px-4 " + (isOpen ? (openClassName || "bg-black text-white rounded-t-xl") + " " : "") + className}>
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
                {children || content}
            </div>
        </div>
    )
}