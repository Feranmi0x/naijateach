"use client";

type Props = {
  body: {
    id: number;
    english: string;
    yoruba: string;
    audioPath: string; // The path to the audio file
  }[];
};

const playAudio = (audioPath: string): void => {
  const audio = new Audio(`/yr-body/${audioPath}`);
  audio.play(); // Play the audio when clicked
};

export const YorubaBody = ({ body }: Props) => {
  return (
    <section className="mb-10 overflow-x-auto">
      <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2">
        Yoruba Part of the Body
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="py-3 px-4 border border-gray-300 w-1/3">English</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Yoruba</th>
            <th className="py-3 px-4 border border-gray-300 w-1/3">Audio</th>
          </tr>
        </thead>
        <tbody>
          {body.map((expression, index) => (
            <tr
              key={expression.id}
              className={`${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition-colors`}
            >
              <td className="py-3 px-4 border border-gray-300 text-center break-words">
                {expression.english}
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center break-words">
                {expression.yoruba}
              </td>
              <td className="py-3 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => playAudio(expression.audioPath)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-300 transition"
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

  