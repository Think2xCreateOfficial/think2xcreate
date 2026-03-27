import { useState } from "react";
import { businessAuditContent } from "../utils/constant/homeConstant";

export function useAudit() {
  const [answers, setAnswers] = useState({});
  const scoreLevels = businessAuditContent.scoreLevels;
  const totalQuestions = businessAuditContent.questions.length;

  const toggleAnswer = (id, value) => {
    setAnswers((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const answeredCount = Object.values(answers).filter(
    (val) => val === true || val === false
  ).length;

  const score = Object.values(answers).filter(Boolean).length;

  const isComplete = answeredCount === totalQuestions;

  const getScoreInfo = () => {
    const level = scoreLevels.find((level) => score <= level.max);
    return level || scoreLevels[scoreLevels.length - 1];
  };

  const scoreInfo = getScoreInfo();

  return {
    answers,
    toggleAnswer,
    answeredCount,
    score,
    scoreInfo,
    isComplete 
  };
}