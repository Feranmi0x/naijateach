"use client";

type Props = {
  numbers: {
    id: number;
    english: string;
    igbo: string;
    audioPath: string;
  }[];
};

export const IgboNumbers = ({ numbers }: Props) => {
  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/ig_numbers/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10 overflow-x-auto">
      <h2 className="text-2xl font-bold text-blue-700 border-b-2 border-blue-700 pb-2">
        Igbo Numbers
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300 table-fixed">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="py-2 px-4 border border-gray-300 w-1/3">English</th>
            <th className="py-2 px-4 border border-gray-300 w-1/3">Igbo</th>
            <th className="py-2 px-4 border border-gray-300 w-1/3">Audio</th>
          </tr>
        </thead>
        <tbody>
          {numbers.map((num, index) => (
            <tr
              key={num.id}
              className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
            >
              <td className="py-2 px-4 border border-gray-300 whitespace-normal break-words">
                {num.english}
              </td>
              <td className="py-2 px-4 border border-gray-300 whitespace-normal break-words">
                {num.igbo}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => playAudio(num.audioPath)}
                  className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 border-b-4 border-blue-700 border-[1.5px]"
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

  