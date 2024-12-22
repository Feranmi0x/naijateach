"use client";
import { useEffect } from "react";
import { useRive } from "@rive-app/react-canvas";

type Props = {
  question: string;
  AnimationSrc: string | null;
};

export const QuestionBubble = ({ question, AnimationSrc }: Props) => {
  const { rive, RiveComponent } = useRive({
    src: AnimationSrc || "",
    stateMachines: "hand", // Replace with your state machine name
    autoplay: true, // Turn off autoplay, we want to control when the animation plays
  });

  // Trigger to play the animation
  const handlePlay = () => {
    if (rive) {
      rive.reset(); // Reset the animation before playing again to ensure it starts from the beginning
      rive.play(); // Play the animation
    }
  };

  // Optional: Listen for custom event to play animation (if needed for global control)
  useEffect(() => {
    const handlePlayEvent = () => {
      if (rive) {
        rive.reset(); // Reset the animation before playing again
        rive.play();
      }
    };

    window.addEventListener("playRiveAnimation", handlePlayEvent);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("playRiveAnimation", handlePlayEvent);
    };
  }, [rive]);

  return (
    <section className="h-full flex items-center gap-x-4 mb-6">
      {AnimationSrc && (
        <div className="relative aspect-square mb-4 max-h-[100px] lg:max-h-[150px] w-[100px]">
          <RiveComponent />
        </div>
      )}
      <div
        onClick={handlePlay} // Trigger play when the button is clicked
        className="relative py-2 px-4 border-2 rounded xl text-sm lg:text-base"
      >
        {question}
        <div className="absolute -left-3 top-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-y-1/2 rotate-90" />
      </div>
    </section>
  );
};