"use client";

type Props = {
  pronouns: {
    id: number;
    english: string;
    igbo: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/ig-pronouns/${audioPath}`);
  audio.play();
};

export const IgboPronouns = ({ pronouns }: Props) => {
  return (
    <section className="mb-10 overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2">
        Igbo Pronouns
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-blue-600 text-white">
            <th className="py-3 px-4 border border-gray-300 w-1/3">English</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Igbo</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Audio</th>
          </tr>
        </thead>
        <tbody>
          {pronouns.map((pronoun, index) => (
            <tr
              key={pronoun.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : ""
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="py-3 px-4 border border-gray-300 text-center break-words">
                {pronoun.english}
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center break-words">
                {pronoun.igbo}
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => playAudio(pronoun.audioPath)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 transition"
                >
                  Play
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
