import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CoursesFilter() {
    return (
        <div className="sticky h-fit top-0 left-0 w-full p-7 border border-[#F0F4F9] flex flex-col gap-8">
            <section className="flex flex-col gap-4 [&_input]:min-h-11">
                <h1 className="text-3xl">Search</h1>
                <div className="flex gap-3 items-center justify-center h-11">
                    <Input placeholder="Search Here  ..." className="h-full" />
                    <div className="bg-[#0D45C5] p-3 rounded-md text-white"><Search /></div>
                </div>
            </section>

            <section className="flex flex-col gap-4 [&_input]:min-h-11">
                <h1 className="text-3xl">Category</h1>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <select value="arabic" className="w-full p-4 border-[#F0F4F9] border-2">
                        <option value="tech">technology</option>
                        <option value="arabic">Arabic Language Basics</option>
                        <option value="english">english</option>
                    </select>

                    <select value="sharia" className="w-full p-4 border-[#F0F4F9] border-2">
                        <option value="sharia">Sharia sciences</option>
                        <option value="arabic">arabic</option>
                        <option value="english">english</option>
                    </select>
                </div>
            </section>

            <section className="flex flex-col gap-4 [&_input]:min-h-11">
                <h1 className="text-3xl">Level</h1>
                <div className="flex flex-col gap-3 items-center justify-center">
                    <Input placeholder="Search Here  ..." className="" />
                    <Input placeholder="Search Here  ..." className="" />
                    <Input placeholder="Search Here  ..." className="" />
                </div>
            </section>
        </div>
    )
}