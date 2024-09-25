import { File } from "lucide-react";

export default function LessonQuizBox({ title = "", minutes, progress = 0 }) {
    return (
        <div className="w-full flex flex-col gap-3 border-2 border-[#EAEAEA] rounded-lg p-4">
            <div className="flex justify-between gap-3">
                <File />
                <p className="text-sm">{title}</p>
                <p className="text-sm">{minutes} M</p>
            </div>

            <div className="flex w-full gap-4 justify-center items-center">
                <div className="w-[80%] bg-[#EAEAEA]">
                    <p className={`border-2 rounded-lg border-[#0D45C5] w-[${progress}%]`}></p>
                </div>
                <p>{progress}%</p>
            </div>
        </div>
    )
}