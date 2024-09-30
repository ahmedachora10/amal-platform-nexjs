'use client';
import { Input } from "../ui/input";

export default function QuizQuession({ answer = "", quession = "", chooses = [] }) {
    return (
        <div className="w-full">
            <div className="bg-[#F9F9F9] border border-[#ABB3B7] p-4">
                <p className="text-lg">{quession}</p>
            </div>

            <div className="w-full">
                {
                    chooses.map((choose, i) => (
                        <div key={i} className="flex items-center gap-3 w-full border border-[#ABB3B7] p-4" onClick={() => {

                        }}>
                            <Input type="radio" value={choose} name={quession} className="w-[29px]" />
                            <p >{choose}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}