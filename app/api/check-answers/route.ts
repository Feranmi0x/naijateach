import { NextRequest, NextResponse } from "next/server";

// Handle POST request
export async function POST(req: NextRequest) {
  try {
    // Parse the incoming JSON data
    const { userAnswers, questionIndex } = await req.json();
    
    // Define the correct answers for all the questions
    const correctAnswers = [
      ["Paris", "Berlin"], // Example: Question 1 correct answers
      ["Tokyo", "Beijing"], // Example: Question 2 correct answers
    ];

    // Check the current question's answers
    const currentCorrectAnswers = correctAnswers[questionIndex];
    const isCorrect = userAnswers.every(
      (answer: string, index: number) =>
        answer.trim().toLowerCase() === currentCorrectAnswers[index].toLowerCase()
    );

    // If correct, move to the next question
    let message = isCorrect ? "Correct!" : "Try again.";
    const nextQuestionIndex = questionIndex + 1;

    // If last question is correct, send success message
    if (nextQuestionIndex >= correctAnswers.length) {
      message = "You've completed all the questions!";
    }

    return NextResponse.json({
      correct: isCorrect,
      message,
      nextQuestionIndex, // Send the index of the next question
    });
  } catch (error) {
    return NextResponse.json(
      { correct: false, message: "Error processing the request." },
      { status: 500 }
    );
  }
}