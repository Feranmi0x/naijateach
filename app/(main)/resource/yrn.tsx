// components/yorubaNumbers.tsx

"use client";

type Props = {
  numbers: {
    id: number;
    english: string;
    yoruba: string;
    audioPath: string;
  }[];
};

export const YorubaNumbers = ({ numbers }: Props) => {
  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2">
        Numbers
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="py-2 px-4 border border-gray-300">English</th>
            <th className="py-2 px-4 border border-gray-300">Yoruba</th>
            <th className="py-2 px-4 border border-gray-300">Audio</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((num, index) => (
            <tr key={num.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-2 px-4 border border-gray-300">{num.english}</td>
              <td className="py-2 px-4 border border-gray-300">{num.yoruba}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  onClick={() => playAudio(num.audioPath)}
                  className="text-green-700 underline hover:text-green-500"
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