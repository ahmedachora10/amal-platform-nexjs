'use client';
import { X } from "lucide-react";
import { Button } from "./ui/button";

export default function Modal({ children, onClose, className = "" }) {
    return (
        <div className={"fixed top-0 left-0 w-screen h-screen bg-gray-100 bg-opacity-30 z-50 " + className}>
            <div className="flex flex-col bg-white">
                <Button className="w-fit m-7 bg-red-600 hover:bg-red-700" onClick={onClose}>
                    <X />
                </Button>

                <div className="min-h-[50vh] w-[80vw] md:max-w-[50vw]">
                    {children}
                </div>
            </div>
        </div>
    )
}