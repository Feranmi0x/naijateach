"use client";

type Props = {
  pronouns: {
    id: number;
    english: string;
    hausa: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/hs-pronouns/${audioPath}`);
  audio.play();
};

export const HausaPronouns = ({ pronouns }: Props) => {
  return (
    <section className="mb-10 overflow-x-auto">
      <h2 className="text-2xl font-bold text-yellow-600 border-b-2 border-yellow-600 pb-2">
        Hausa Pronouns
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-yellow-600 text-white">
            <th className="py-3 px-4 border border-gray-300 w-1/3">English</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Hausa</th>
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
              <td className="py-3 px-4 border border-gray-300 break-words text-center">
                {pronoun.english}
              </td>
              <td className="py-3 px-4 border border-gray-300 break-words text-center">
                {pronoun.hausa}
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => playAudio(pronoun.audioPath)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-300 transition"
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

  
  