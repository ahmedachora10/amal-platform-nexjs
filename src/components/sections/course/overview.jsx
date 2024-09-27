import { ChevronUp, CirclePlay, Clock9Icon, File } from "lucide-react";
import Link from "next/link";
import TextSection from "../text_section";

/**
 * 
 * @param {{data: import("@/types/static/global").Course}} param0 
 * @returns 
 */
export default function CourseOverviewSection({ data }) {
    return (
        <section className="w-full">
            <div>
                <TextSection title="Overview" id="overview" content={data.overview} />
            </div>


            <div className="flex flex-col justify-between w-full">
                <thead className="grow flex">
                    <div className="text-sm flex gap-3 items-center justify-start grow bg-[#F9F9F9] p-4">
                        <ChevronUp />
                        <p>Getting Started</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="flex text-sm gap-2 items-center">
                            <CirclePlay className="text-xs" />
                            <p>{data.lessons_count || 0} lectures</p>
                        </div>

                        <div className="flex text-sm gap-2 items-center">
                            <Clock9Icon className="text-xs" />
                            <p>{data.duration} min</p>
                        </div>
                    </div>
                </thead>
                <hr />

                <tbody className="flex flex-col">
                    <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                        <div className="flex items-center gap-2">
                            <File />
                            <p>First Hour Lesson 1</p>
                        </div>

                        <div>
                            <Link href="" className="text-[#084C94]">Preview</Link>
                        </div>
                    </div>
                    <hr />

                    <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                        <div className="flex items-center gap-2">
                            <File />
                            <p>First Hour Lesson 2</p>
                        </div>

                        <div className="flex gap-3">
                            <Clock9Icon />
                            <p>7 min</p>
                        </div>
                    </div>
                    <hr />

                    <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                        <div className="flex items-center gap-2">
                            <File />
                            <p>First Hour Lesson 3</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Clock9Icon />
                            <p>5 min</p>
                        </div>
                    </div>
                    <hr />

                    <div className="text-sm flex gap-3 items-center justify-between grow p-4">
                        <div className="flex items-center gap-2">
                            <File />
                            <p>First Hour Lesson 4</p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <Clock9Icon />
                            <Link href="" className="text-[#084C94]">8 Quessions</Link>
                        </div>
                    </div>
                    <hr />
                </tbody>
            </div>
        </section>
    )
}