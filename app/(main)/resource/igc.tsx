"use client";

type Props = {
  commonExp: {
    id: number;
    english: string;
    igbo: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/ig-commonExp/${audioPath}`);
  audio.play(); // Play the audio when clicked
};

export const IgboCommonExp = ({ commonExp }: Props) => {
  return (
    <section className="mb-10 px-4">
      <h2 className="text-2xl font-bold text-bluee border-b-2 border-bluee pb-2 mb-4">
        Igbo Common Expressions
      </h2>
      <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
        <thead>
          <tr className="bg-bluee text-white">
            <th className="py-3 px-5 border border-gray-300 text-left">English</th>
            <th className="py-3 px-5 border border-gray-300 text-left">Igbo</th>
            <th className="py-3 px-5 border border-gray-300 text-center">Audio</th>
          </tr>
        </thead>
        <tbody>
          {commonExp.map((expression, index) => (
            <tr
              key={expression.id}
              className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}
            >
              <td className="py-3 px-5 border border-gray-300">{expression.english}</td>
              <td className="py-3 px-5 border border-gray-300">{expression.igbo}</td>
              <td className="py-3 px-5 border border-gray-300 text-center">
                {/* Play audio when pronunciation is clicked */}
                <button
                  onClick={() => playAudio(expression.audioPath)}
                  className="text-blue-600 hover:underline"
                >
                  play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
