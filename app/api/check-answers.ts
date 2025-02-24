import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  correct: boolean;
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ correct: false, message: "Method Not Allowed" });
  }

  const { userAnswers } = req.body as { userAnswers: string[] };
  const correctAnswers = ["Paris", "Berlin"];

  const isCorrect = userAnswers.every(
    (answer, index) => answer.trim().toLowerCase() === correctAnswers[index].toLowerCase()
  );

  res.status(200).json({
    correct: isCorrect,
    message: isCorrect ? "Correct!" : "Try again.",
  });
}
