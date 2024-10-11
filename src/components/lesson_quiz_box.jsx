'use client';
import { File } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LessonQuizBox({ title = "", unitValue, progress = 0, url = "", noProgress = false, unitName = "M" }) {
    const router = useRouter();

    return (
        <div className={"w-full flex flex-col gap-3 border-2 border-[#EAEAEA] rounded-lg p-4" + (url ? "  hover:shadow hover:border-gray-300 transition-all cursor-pointer" : "") + (!url && 'bg-gray-600 cursor-not-allowed p-4 ')} onClick={url ? () => router.push(url) : undefined}>
            <div className="flex justify-between gap-3">
                <File />
                <p className="text-sm">{title}</p>
                <p className="text-sm">{unitValue} {unitName}</p>
            </div>

            {
                noProgress ? null : (
                    <div className="flex items-center justify-center w-full gap-4">
                        <div className="w-[80%] bg-[#EAEAEA]">
                            <p className={`border-2 rounded-lg border-[#0D45C5] w-[${progress}%]`}></p>
                        </div>
                        <p>{progress}%</p>
                    </div>
                )
            }
        </div>
    )
}