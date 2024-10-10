"use client";
import { Input } from "../ui/input";

/**
 *
 * @param {{answer?: string, quession: string,chooses: import("@/types/static/global").QuessionOption[]}} param0
 * @returns
 */
export default function QuizQuession({
  quession = "",
  chooses = [],
  selectedAnswer = null,
  correctAnswer = null,
  submitted = false,
  onAnswerSelect,
}) {
  return (
    <div className="w-full">
      <div className="bg-[#F9F9F9] border border-[#ABB3B7] p-4">
        <p className="text-lg">{quession}</p>
      </div>

      <div className="w-full">
        {chooses.map((choose) => (
          <div
            key={choose.id}
            className={`flex items-center gap-3 w-full border p-4 ${
              submitted
                ? choose.id === correctAnswer
                  ? "border-green-500"
                  : choose.id === selectedAnswer
                  ? "border-red-500"
                  : "border-[#ABB3B7]"
                : "border-[#ABB3B7]"
            }`}
            onClick={() => !submitted && onAnswerSelect(choose.id)}
          >
            <Input
              type="radio"
              name={`quiz_${choose.quiz_id}`}
              checked={selectedAnswer === choose.id}
              className="w-[29px]"
              readOnly={submitted} // Disable input after submission
            />
            <p>{choose.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
