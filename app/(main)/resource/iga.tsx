"use client";

export const IgboAlphabet = () => {
  const alphabet = [
    { letter: "A", audio: "iga.mp3" },
    { letter: "B", audio: "igb.mp3" },
    { letter: "Ch", audio: "igch.mp3" },
    { letter: "D", audio: "igd.mp3" },
    { letter: "E", audio: "ige.mp3" },
    { letter: "F", audio: "igf.mp3" },
    { letter: "G", audio: "igg.mp3" },
    { letter: "Gb", audio: "iggb.mp3" },
    { letter: "Gh", audio: "iggh.mp3" },
    { letter: "H", audio: "igh.mp3" },
    { letter: "I", audio: "igi.mp3" },
    { letter: "Ị", audio: "igị.mp3" },
    { letter: "J", audio: "igj.mp3" },
    { letter: "K", audio: "igk.mp3" },
    { letter: "Kp", audio: "igkp.mp3" },
    { letter: "L", audio: "igl.mp3" },
    { letter: "M", audio: "igm.mp3" },
    { letter: "N", audio: "ign.mp3" },
    { letter: "Ṅ", audio: "igṅ.mp3" },
    { letter: "Ny", audio: "igny.mp3" },
    { letter: "O", audio: "igo.mp3" },
    { letter: "Ọ", audio: "igọ.mp3" },
    { letter: "P", audio: "igp.mp3" },
    { letter: "R", audio: "igr.mp3" },
    { letter: "S", audio: "igs.mp3" },
    { letter: "Sh", audio: "igsh.mp3" },
    { letter: "T", audio: "igt.mp3" },
    { letter: "U", audio: "igu.mp3" },
    { letter: "Ụ", audio: "igụ.mp3" },
    { letter: "V", audio: "igv.mp3" },
    { letter: "W", audio: "igw.mp3" },
    { letter: "Y", audio: "igy.mp3" },
    { letter: "Z", audio: "igz.mp3" },
  ];

  const playAudio = (audioPath: string): void => {
    const audio = new Audio(`/${audioPath}`);
    audio.play();
  };

  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-bluee border-b-2 border-bluee pb-2">
        Alphabet with Audio Pronunciation
      </h2>
      <table className="w-full mt-4 border-collapse border border-gray-300">
        <thead>
          <tr className="bg-bluee text-white">
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
                  className="bg-bluee text-white px-4 py-1 rounded hover:bg-bluee focus:outline-none focus:ring focus:ring-bluee"
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
  
  