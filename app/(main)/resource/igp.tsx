// components/igboPronouns.tsx

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
  const audio = new Audio(`/${audioPath}`);
  audio.play(); // Play the audio when clicked
};

export const IgboPronouns = ({ pronouns }: Props) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-bluee border-b-2 border-bluee pb-2">
        Pronouns
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-bluee text-white">
            <th className="py-2 px-4 border border-gray-300">English</th>
            <th className="py-2 px-4 border border-gray-300">Igbo</th>
            <th className="py-2 px-4 border border-gray-300">Audio</th>
          </tr>
        </thead>
        <tbody>
          {pronouns.map((pronoun, index) => (
            <tr key={pronoun.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-2 px-4 border border-gray-300">{pronoun.english}</td>
              <td className="py-2 px-4 border border-gray-300">{pronoun.igbo}</td>
              <td className="py-2 px-4 border border-gray-300">
                {/* Play audio when pronunciation is clicked */}
                <button
                  onClick={() => playAudio(pronoun.audioPath)}
                  className="text-blue-600 hover:underline"
                >
                  Listen
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};