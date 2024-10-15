"use client";

import React, { useEffect, useState } from "react";
import QuizQuession from "./QuizQuession";
import { Button } from "../ui/button";
import { toast } from "sonner";
import DynamicPagesApi from "@/api/dynamic";

const QuizeProvides = ({ currentQuize }) => {
  const [answersForm, setAnswersForm] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState('');
  const [loading, setLoading] = useState(false);

  const [quiz, setQuiz] = useState({});

  const handleAnswerSelection = (quizId, answerId) => {
    setAnswersForm((prev) => ({
      ...prev,
      [quizId]: answerId,
    }));
  };

  useEffect(() => {
    const getQuiz = async () => (await DynamicPagesApi.checkQuiz(currentQuize.id)).data;
    getQuiz().then((res) => {
      setQuiz(res);
      if (res.status) {
        setAnswersForm(res.answers);
        setSubmitted(true);
        setScore(res.result);
      }
    });
  }, [currentQuize]);

  const getCorrectAnswers = () => {
    currentQuize.questions.forEach((question) => {
      const selectedAnswer = answersForm[question.id];
      if (selectedAnswer === question.correctAnswerId) {
        correctAnswers++;
      }
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    let correctAnswers = 0;

    // Evaluate the answers and prepare the payload
    getCorrectAnswers();
  
    setScore(`${correctAnswers} / ${currentQuize?.quessions?.length}`);

    try {
      await DynamicPagesApi.studentPassTheTest(currentQuize.id, answersForm).then(
        (res) => {
          setSubmitted(true);
          toast.success(res?.message || "Submission successful.");
        }
      );
    } catch (error) {
      toast.error("An error occurred while submitting.");
    } finally {
      setLoading(false); // Stop the loading spinner
    }
  };

  return (
    <form className="grow-[4] flex flex-col gap-11" onSubmit={handleSubmit}>
      <h1 className="text-xl font-bold">Quiz</h1>
      {currentQuize?.questions.map((question) => (
        <QuizQuession
          key={question.id}
          quession={question.question}
          chooses={question.options}
          selectedAnswer={answersForm[question.id]}
          correctAnswer={question.correctAnswerId}
          submitted={submitted}
          onAnswerSelect={(answerId) =>
            handleAnswerSelection(question.id, answerId)
          }
        />
      ))}
      {submitted ? (
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">
            {score}
          </p>
          <Button
            className="w-fit px-16"
            // onClick={() => {
            //   setAnswersForm({});
            //   setSubmitted(false);
            //   setScore(0);
            //   alert("Quiz Ended");
            // }}
          >
            End
          </Button>
        </div>
      ) : (
        <Button type="submit" className="w-fit px-16">
          {loading ? "Loading..." : "Send"}
        </Button>
      )}
    </form>
  );
};

export default QuizeProvides;
