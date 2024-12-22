"use client";

import { QuestionBubble } from "./quiz";

const TriggerHandAnimation = () => {
  // Trigger the "hand" animation when this button is clicked
  const handleTriggerHand = () => {
    window.dispatchEvent(
      new CustomEvent("triggerRiveAnimation", {
        detail: "hand", // Pass "hand" as the detail to trigger the "hand" state machine
      })
    );
  };

  return (
    <div>
      <QuestionBubble
        question="This is a sample question"
        AnimationSrc="statemachine.riv"
      />
      <button onClick={handleTriggerHand}>Trigger Hand Animation</button>
    </div>
  );
};

export default TriggerHandAnimation;