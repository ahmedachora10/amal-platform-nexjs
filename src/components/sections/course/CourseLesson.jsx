import { Clock9Icon, File } from "lucide-react";

/**
 * 
 * @param {{data: import("@/types/static/global").CourseLesson}} param0 
 * @returns 
 */
export default function CourseLesson({ data }) {
    return (
        <div className="text-sm flex gap-3 items-center justify-between grow p-4">
            <div className="flex items-center gap-2">
                <File />
                <p>{data.name}</p>
            </div>

            <div className="flex gap-3">
                <Clock9Icon />
                <p>{data.duration || null} min</p>
            </div>
        </div>
    )
}