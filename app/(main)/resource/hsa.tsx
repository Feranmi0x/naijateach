"use client"
export const HausaAlphabet = () => {
  const alphabet = [
    { letter: "A", audio: "a.mp3" },
    { letter: "B", audio: "b.mp3" },
    { letter: "C", audio: "c.mp3" },
    { letter: "D", audio: "d.mp3" },
    { letter: "E", audio: "e.mp3" },
    { letter: "F", audio: "f.mp3" },
    { letter: "G", audio: "g.mp3" },
    { letter: "H", audio: "h.mp3" },
    { letter: "I", audio: "i.mp3" },
    { letter: "J", audio: "j.mp3" },
    { letter: "K", audio: "k.mp3" },
    { letter: "L", audio: "l.mp3" },
    { letter: "M", audio: "m.mp3" },
    { letter: "N", audio: "n.mp3" },
    { letter: "R", audio: "r.mp3" },
    { letter: "S", audio: "s.mp3" },
    { letter: "T", audio: "t.mp3" },
    { letter: "U", audio: "u.mp3" },
    { letter: "W", audio: "w.mp3" },
    { letter: "Y", audio: "y.mp3" },
    { letter: "Z", audio: "z.mp3" },
  ];

  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-yelloww border-b-2 border-yelloww pb-2">
        Alphabet with Audio Pronunciation
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-yelloww text-white">
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
                  className="bg-yelloww text-white px-4 py-1 rounded hover:bg-yelloww focus:outline-none focus:ring focus:ring-yelloww"
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
  
  