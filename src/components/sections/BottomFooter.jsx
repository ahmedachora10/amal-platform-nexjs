'use client';
import useSettings from "@/app/_hook/useSettings";
import MainLinks from "../ui/main-links";

export default function BottomFooter() {
    const {settings} = useSettings();
    return (
        <div className="flex items-center justify-evenly text-white bg-black py-2">
            <p>{ settings('footer') }</p>
            <MainLinks />
        </div>
    )
}