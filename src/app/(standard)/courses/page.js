'use client';
import Course from "@/components/cards/Course";
import UserPositionSection from "@/components/sections/user_position_section";
import icon from "@/app/test.jpeg";
import { Button } from "@/components/ui/button";
import CoursesFilter from "@/components/ui/CoursesFilter";
import { Filter } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getCourses } from "@/app/_actions/getCourses";
import Modal from "@/components/Modal";
import CourseSkeleton from "@/components/ui/skeletons/course";
import useAuth from "@/app/_hook/useAuth";
import Link from "next/link";

export default function CoursesPage() {
    const [filterOpen, setFilterOpen] = useState(false);
    const params = useSearchParams();
    const [pending, setPending] = useState(true);
    const { isStudentSubscripted } = useAuth();
    const router = useRouter();
    /**
     * @type {import("@/types/CourseFilter").CourseFilter}
     */
    const filterData = {
        levelId: params.get("levelId"),
        search: params.get("search"),
        categoryId: params.get("categoryId"),
        page: params.get("page"),
    };

    const coursesState = useState([]);
    /** @type {import("@/types/static/global").Course[]} */
    const courses = coursesState[0];
    const setCourses = coursesState[1];
    const [next, setNext] = useState();
    const [prev, setPrev] = useState();


    useEffect(() => {
        if (!pending) setPending(true);
        getCourses(filterData).then(response => {
            setTimeout(() => {
                const pattern = /page=(\d+)$/g;
                const nextPage = response?.links?.next;
                const prevPage = response?.links?.prev;
                setPending(false);
                setCourses(response.data);
                setNext(parseInt(nextPage?.substr(nextPage?.search(pattern) + 5) || null));
                setPrev(parseInt(prevPage?.substr(prevPage?.search(pattern) + 5) || null));
                console.log('response', response);
                
            }, 500);
        })
    }, [params]);

    console.log('courses----',courses, next, prev);
    

    const handlePageChange = (page) => {
        const searchParams = new URLSearchParams();

        filterData.page = page;

        for (let param in filterData) {
            const value = filterData[param];
            if (value === null) continue;

            searchParams.set(param, value);
        }

        console.log(searchParams);
        
        
        router.push(`/courses?${searchParams}`);
    }

    return (
        <div className="flex flex-col mb-52">
            <UserPositionSection pageName="Courses List" position="Home | Courses List" />

            <div className="grid grid-cols-12 container mx-auto mt-7">

                <div className="md:col-span-4 lg:col-span-3 grow relative hidden md:flex">

                    {/* the container */}
                    <CoursesFilter />

                </div>

                {
                    filterOpen ? (
                        <Modal onClose={() => setFilterOpen(false)}>
                            <div className="w-screen">
                                <CoursesFilter />
                            </div>
                        </Modal>
                    ) : undefined
                }
                <div className="col-span-full md:col-span-8 lg:col-span-9 flex flex-col grow-[4]">

                    <div className="flex justify-between flex-row-reverse md:flex-row ml-4 gap-4">
                        <div className="flex items-center gap-4">
                            <Button className="md:hidden bg-[#03A9F5] hover:bg-[#03a8f5d7]" onClick={() => setFilterOpen(true)}>
                                <Filter />
                            </Button>
                            <div className="hidden md:flex gap-3 items-center">
                                <BackForwardButtons next={next} prev={prev} onPageChange={handlePageChange} />
                            </div>
                        </div>

                        <div className="flex items-center gap-4 font-light whitespace-nowrap">
                            <p>Sort By: </p>
                            <select value="arabic" className="w-full px-4 py-2 text-sm border-[#F0F4F9] border-2">
                                <option value="news">Release Date (news first)</option>
                                <option value="old">Older First</option>
                                <option value="best">BestSelling</option>
                            </select>

                        </div>
                    </div>

                    <div className="grid grid-cols-12 gap-4">
                        {courses?.map((course, index) => (
                            <div className="p-4 col-span-full md:col-span-6 lg:col-span-4 mx-auto" key={index}>
                                <Course isSubscribed={isStudentSubscripted(course.id)} title={course.name} category={course.category.name} image={icon} subscriptions={3} link={`/courses/${course.id}`} price={course.price} rating={4.4} courseId={course.id} />
                            </div>
                        ))}

                        {
                            (courses.length === 0 && pending) ? (
                                <>
                                    {Array.from({ length: 9 }).map((index) => (
                                        <CourseSkeleton key={index} />
                                    ))}
                                </>
                            ) : null
                        }
                    </div>

                    <div className="md:hidden flex gap-3 items-center"><BackForwardButtons /></div>
                </div>

                <div className="flex grow"></div>
            </div>
        </div>
    )
}

function BackForwardButtons({next, prev, onPageChange}) {
    return (
        <>
                <Button className="border border-[#FDC800]" onClick={() => onPageChange(next)} variant="outline" disabled={!next}>
                    {"<"}
                </Button>
                <Button className="" variant="outline" onClick={() => onPageChange(prev)} disabled={!prev}>
                    {">"}
                </Button>
            <p className="">Showing 1-9 of 11 results</p>
        </>
    )
}
