import { Clock9Icon, File, HelpCircle } from "lucide-react";

/**
 * 
 * @param {{icon: "file" | "quession",icon2: "time" | "none", name: string, unit: number, unitName: string}} param0 
 * @returns 
 */
export default function CourseLessonUnit({ icon = "file", icon2 = "time", name = "", unit = 0, unitName = "min", url = "" }) {
    return (
        <div className="text-sm flex gap-3 items-center justify-between grow p-4">
            <div className="flex items-center gap-2">
                {icon == "file" ? <File /> : <HelpCircle />}
                <p>{name}</p>
            </div>

            <div className="flex items-center gap-3">
                {icon2 == "time" ? <Clock9Icon /> : null}
                <p className={url ? "text-sky-700 hover:text-sky-800 cursor-pointer" : ""}>{unit} {unitName}</p>
            </div>
        </div>
    )
}