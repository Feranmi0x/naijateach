
"use client";

type Props = {
  genders: {
    id: number;
    english: string;
    hausa: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/hs-local/${audioPath}`);
  audio.play(); // Play the audio when clicked
};

export const HausaGender = ({ genders }: Props) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-yelloww border-b-2 border-yelloww pb-2">
        Local Items/Food
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-yelloww text-white">
            <th className="py-2 px-4 border border-gray-300">English</th>
            <th className="py-2 px-4 border border-gray-300">Hausa</th>
            <th className="py-2 px-4 border border-gray-300">Audio</th>
          </tr>
        </thead>
        <tbody>
          {genders.map((gender, index) => (
            <tr key={gender.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-2 px-4 border border-gray-300">{gender.english}</td>
              <td className="py-2 px-4 border border-gray-300">{gender.hausa}</td>
              <td className="py-2 px-4 border border-gray-300">
                {/* Play audio when pronunciation is clicked */}
                <button
                  onClick={() => playAudio(gender.audioPath)}
                  className="text-yelloww hover:underline"
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
  
  