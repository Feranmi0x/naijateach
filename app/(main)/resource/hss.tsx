// components/Hausaslangs.tsx

"use client";

type Props = {
  slangs: {
    id: number;
    english: string;
    hausa: string;
    audioPath: string;
  }[];
};

export const HausaSlangs = ({ slangs }: Props) => {
  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/hs-slangs/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-yelloww border-b-2 border-yelloww pb-2">
        Hausa Slangs
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
          {slangs.map((num, index) => (
            <tr key={num.id} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-2 px-4 border border-gray-300">{num.english}</td>
              <td className="py-2 px-4 border border-gray-300">{num.hausa}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  onClick={() => playAudio(num.audioPath)}
                  className="text-yelloww underline hover:text-yellow-500"
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