"use client";

export const YorubaAlphabet = () => {
  const alphabet = [
    { letter: "A", audio: "yra.mp3" },
    { letter: "B", audio: "yrb.mp3" },
    { letter: "D", audio: "yrd.mp3" },
    { letter: "E", audio: "yre.mp3" },
    { letter: "Ẹ", audio: "yrẹ.mp3" },
    { letter: "F", audio: "yrf.mp3" },
    { letter: "G", audio: "yrg.mp3" },
    { letter: "GB", audio: "yrgb.mp3" },
    { letter: "H", audio: "yrh.mp3" },
    { letter: "I", audio: "yri.mp3" },
    { letter: "J", audio: "yrj.mp3" },
    { letter: "K", audio: "yrk.mp3" },
    { letter: "L", audio: "yrl.mp3" },
    { letter: "M", audio: "yrm.mp3" },
    { letter: "N", audio: "yrn.mp3" },
    { letter: "O", audio: "yro.mp3" },
    { letter: "Ọ", audio: "yrọ.mp3" },
    { letter: "P", audio: "yrp.mp3" },
    { letter: "R", audio: "yrr.mp3" },
    { letter: "S", audio: "yrs.mp3" },
    { letter: "Ṣ", audio: "yrṣ.mp3" },
    { letter: "T", audio: "yrt.mp3" },
    { letter: "U", audio: "yru.mp3" },
    { letter: "W", audio: "yrw.mp3" },
    { letter: "Y", audio: "yry.mp3" },
  ];

  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-green-700 border-b-2 border-green-700 pb-2">
        Alphabet with Audio Pronunciation
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-green-700 text-white">
            <th className="py-2 px-4 border border-gray-300">Letter</th>
            <th className="py-2 px-4 border border-gray-300">Play Audio</th>
          </tr>
        </thead>
        <tbody>
          {alphabet.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? "bg-gray-100" : ""}`}>
              <td className="py-2 px-4 border border-gray-300">{item.letter}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  onClick={() => playAudio(item.audio)}
                  className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800 focus:outline-none focus:ring focus:ring-green-300"
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