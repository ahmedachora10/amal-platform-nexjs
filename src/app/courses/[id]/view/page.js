import LessonQuizBox from "@/components/lesson_quiz_box";
import { Input } from "@/components/ui/input";
import OpenBox from "@/components/ui/open_box";
import { Search } from "lucide-react";
import Image from "next/image";
import test3 from "../../../test-3.png";
import TextSection from "@/components/sections/text_section";
import FileDownload from "@/components/file_download";

export default function CourseView() {
    const virtualData = {}

    return (
        <main className="flex md:container mx-4 gap-7 mt-7 md:mx-auto">
            <div className="grow hidden sm:flex flex-col gap-4 items-end">
                <div className="flex items-center border-2 border-[#EAEAEA] rounded-lg pr-2 w-full">
                    <Input placeholder="Search" className="p-3 border-none" />
                    <Search className="rotate-90 text-sm size-4" />
                </div>

                <div className="w-full">
                    <OpenBox title="Getting Started" openClassName="n" open>
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <div className="w-full border-2 border-[#EAEAEA] p-3">Quiz</div>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                    <OpenBox title="Getting Started" openClassName="n">
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                        <LessonQuizBox title="First Hour Lesson 1" minutes={20} progress={70} />
                    </OpenBox>

                </div>
            </div>

            <div className="grow-[4] flex flex-col gap-11">
                <Image src={test3} />
                <TextSection content={`
Proactively envisioned multimedia based expertise and cross-media growth strategies. Seamlessly visualize quality intellectual capital without superior collaboration and idea-sharing. Holistically pontificate installed base portals after maintainable products.

Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively coordinate proactive e-commerce via process-centric “outside the box” thinking. Completely pursue scalable customer service through sustainable potentialities.

Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or “organic” sources.

Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies vis-a-vis impactful experiences. Dramatically synthesize integrated schemas with optimal networks.

Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures. Completely iterate covalent strategic theme areas via accurate e-markets.

Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.

Credibly reintermediate backend ideas for cross-platform models. Continually reintermediate integrated processes through technically sound intellectual capital. Holistically foster superior methodologies without market-driven best practices.

Distinctively exploit optimal alignments for intuitive bandwidth. Quickly coordinate e-business applications through revolutionary catalysts for change. Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.

Synergistically evolve 2.0 technologies rather than just in time initiatives. Quickly deploy strategic networks with compelling e-business. Credibly pontificate highly efficient manufactured products and enabled data.`} />

                <h3 className="text-lg font-bold">File</h3>
                <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3">
                    <FileDownload name="Name Of File" url="" />
                    <FileDownload name="Name Of File" url="" />
                </div>
            </div>
            <div className="grow hidden sm:block"></div>
        </main>
    )
}