import { useState } from "react";

type FillInTheBlankProps = {
  sentence: string;
  correctAnswers: string[];
  onSubmit: (answers: string[]) => void;
};

const FillInTheBlank: React.FC<FillInTheBlankProps> = ({
  sentence,
  correctAnswers,
  onSubmit,
}) => {
  const parts = sentence.split("___");
  const [userAnswers, setUserAnswers] = useState<string[]>(
    Array(correctAnswers.length).fill("")
  );

  const handleChange = (index: number, value: string) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[index] = value;
    setUserAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    onSubmit(userAnswers);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Fill in the Blank</h2>
      <p className="text-lg mb-4">
        {parts.map((part, index) => (
          <span key={index}>
            {part}
            {index < correctAnswers.length && (
              <input
                type="text"
                value={userAnswers[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                className="mx-2 px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}
          </span>
        ))}
      </p>
      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Check Answer
      </button>
    </div>
  );
};

export default FillInTheBlank;