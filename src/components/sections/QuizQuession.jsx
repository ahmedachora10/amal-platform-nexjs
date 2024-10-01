'use client';
import { Input } from "../ui/input";

/**
 * 
 * @param {{answer?: string, quession: string,chooses: import("@/types/static/global").QuessionOption[]}} param0 
 * @returns 
 */
export default function QuizQuession({ answer = "", quession = "", chooses = [] }) {
    return (
        <div className="w-full">
            <div className="bg-[#F9F9F9] border border-[#ABB3B7] p-4">
                <p className="text-lg">{quession}</p>
            </div>

            <div className="w-full">
                {
                    chooses.map((choose, i) => (
                        <div key={choose.id} className="flex items-center gap-3 w-full border border-[#ABB3B7] p-4" onClick={() => {

                        }}>
                            <Input type="radio" name={choose.quiz_id} className="w-[29px]" />
                            <p >{choose.answer}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}