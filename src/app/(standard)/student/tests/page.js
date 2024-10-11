"use client";

import DynamicPagesApi from "@/api/dynamic";
import { useEffect, useState } from "react";
import { CalendarIcon, FileTextIcon } from "lucide-react"; // Assuming you're using lucide-react icons

export default function StudentTestPage() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {

    DynamicPagesApi.studentTests().then((tests) => {
      console.log("tests", tests);
      setIsPending(false);
      // setData(tests);
      setData(tests);
    });
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-xl font-semibold">Your Tests</h3>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {data.map((quiz) => {
          return <TestCard key={quiz.id} quiz={quiz} />;
        })}

        {!data.length && !isPending ? (
          <h4 className="text-xl text-center">You don't have any tests</h4>
        ) : undefined}
      </div>
    </div>
  );
}

const TestCard = ({ quiz }) => {
  const quizDate = new Date(quiz.createdAt).toLocaleDateString("en-US", {
    weekday: "short",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="border rounded-lg p-4 w-full flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="font-semibold text-lg">{quiz.name}</h3>
      <p className="text-sm text-gray-600">
        {quiz.course.categoryName} Language | {quiz.course.name}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarIcon size={16} />
          <span>{quizDate}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <FileTextIcon size={16} />
          <span>50%</span>
        </div>
      </div>
    </div>
  );
};
