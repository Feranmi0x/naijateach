import React, { useRef } from 'react';
import { Volume2 } from 'lucide-react';

type Props = {
  result: string;
  audioUrl: string;
}

const Heading = ({ result, audioUrl }: Props) => {
  // Define the ref with the correct type (HTMLAudioElement)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Safely call play() if the audio element is available
    }
  };

  return (
    <>
      <div className="flex flex-row items-center gap-5 my-5">
        <button 
          onClick={playAudio} 
          className="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center" // Fixed the bg-yellow-500 class
        >
          <Volume2 className="text-white" />
        </button>
        <h3 className="font-bold text-2xl">{result}</h3>
      </div>
      <div className="h-[2px] bg-gray-200 w-full"></div>
      {/* Hidden audio element for playing sound */}
      <audio className="hidden" ref={audioRef} src={audioUrl} />
    </>
  );
}

export default Heading;
