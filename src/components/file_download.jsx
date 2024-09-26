import { DownloadCloud, File } from "lucide-react";
import IconCover from "./ui/icon_cover";

export default function FileDownload({ url = "", name = "" }) {
    return (
        <div className="p-4 flex justify-between items-center gap-8 cursor-pointer border border-[#EAEAEA] rounded-lg hover:shadow-md transition-all">
            <div className="flex items-center gap-3">
                <IconCover><File /></IconCover>
                <a className="text-lg gap-3 text-[#707070] font-thin" href={url} download>{name}</a>
            </div>
            <div>
                <DownloadCloud />
            </div>
        </div>
    )
}