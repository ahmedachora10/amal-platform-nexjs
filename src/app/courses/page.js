'use client';
import Course from "@/components/cards/Course";
import UserPositionSection from "@/components/sections/user_position_section";
import icon from "@/app/test.jpeg";
import { Button } from "@/components/ui/button";
import CoursesFilter from "@/components/ui/CoursesFilter";
import { Filter, X } from "lucide-react";
import { useState } from "react";

export default function CoursesPage() {
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className="flex flex-col mb-52">
            <UserPositionSection pageName="Courses List" position="Home | Courses List" />

            <div className="flex container mx-auto mt-7">

                <div className="grow relative hidden md:flex">

                    {/* the container */}
                    <CoursesFilter />

                </div>

                {
                    filterOpen ? (
                        <div className="fixed top-0 left-0 w-screen h-screen bg-gray-100 bg-opacity-30 z-50">
                            <div className="flex flex-col bg-white">
                                <Button className="w-fit m-7 bg-red-600 hover:bg-red-700" onClick={() => setFilterOpen(false)}>
                                    <X />
                                </Button>
                                <CoursesFilter />
                            </div>
                        </div>
                    ) : undefined
                }
                <div className="flex flex-col grow-[4]">

                    <div className="flex justify-between flex-row-reverse md:flex-row ml-4 gap-4">
                        <div className="flex items-center gap-4">
                            <Button className="md:hidden bg-[#03A9F5] hover:bg-[#03a8f5d7]" onClick={() => setFilterOpen(true)}>
                                <Filter />
                            </Button>
                            <div className="hidden md:block">
                                <BackForwardButtons />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 font-light whitespace-nowrap">
                            <p>Sort By: </p>
                            <select value="arabic" className="w-full p-4 border-[#F0F4F9] border-2">
                                <option value="news">Release Date (news first)</option>
                                <option value="old">Older First</option>
                                <option value="best">BestSelling</option>
                            </select>

                        </div>
                    </div>

                    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <div className="p-4 mx-auto" key={index}>
                                <Course title="The comprehensive course - Learn " category="Arabic language" image={icon} subscriptions={3} link="/" price={28.25} rating={4.4} />
                            </div>
                        ))}
                    </div>

                    <div className="md:hidden flex gap-3 items-center"><BackForwardButtons /></div>
                </div>

                <div className="flex grow"></div>
            </div>
        </div>
    )
}

function BackForwardButtons() {
    return (
        <>
            <Button className="border border-[#FDC800]" variant="outline">{"<"}</Button>
            <Button className="" variant="outline">{">"}</Button>
            <p className="">Showing 1-9 of 11 results</p>
        </>
    )
}