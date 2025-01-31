"use client";

type Props = {
  body: {
    id: number;
    english: string;
    hausa: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/hs-body/${audioPath}`);
  audio.play();
};

export const HausaBody = ({ body }: Props) => {
  return (
    <section className="mb-10 overflow-x-auto">
      <h2 className="text-2xl font-bold text-yelloww border-b-2 border-yelloww pb-2">
        Hausa Part of the Body
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-yelloww text-white">
            <th className="py-3 px-4 border border-gray-300 w-1/3">English</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Hausa</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Audio</th>
          </tr>
        </thead>
        <tbody>
          {body.map((expression, index) => (
            <tr
              key={expression.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : ""
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="py-3 px-4 border border-gray-300 break-words">
                {expression.english}
              </td>
              <td className="py-3 px-4 border border-gray-300 break-words">
                {expression.hausa}
              </td>
              <td className="py-3 px-4 border border-gray-300">
                <button
                  onClick={() => playAudio(expression.audioPath)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition"
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

  