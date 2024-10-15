
'use client';
import useSettings from "@/app/_hook/useSettings";

export default function TopHeader() {
    const {settings} = useSettings();
    return (
        <div className="bg-black py-2 text-white text-right">
            <div className="container mx-auto text-xs">
                <span> Call: {settings('phone')}</span>
            </div>
        </div>
    );
}