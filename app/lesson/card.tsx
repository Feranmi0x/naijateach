import { challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useAudio, useKey } from "react-use";
import { useCallback } from "react";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status?: "correct" | "wrong" | "none";
  type: typeof challenges.$inferSelect["type"];
};

export const Card = ({
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  status,
  disabled,
  type,
}: Props) => {
  const audioFile = `/audio/${audioSrc}`;
  const [audio, {}, controls] = useAudio({ src: audioFile || "" });

  const handleClick = useCallback(() => {
    if (disabled) return; // Skip if disabled
    if (type === "FILL_IN_THE_BLANK") return; // Skip click handling for fill-in-the-blank
    controls.play();
    onClick();
  }, [disabled, onClick, controls, type]);

  useKey(shortcut, handleClick, {}, [handleClick]);

  // Determine card styles based on selection and status
  const cardStyles = cn(
    "h-full border-[0.5px] border-bluee border-b-2 hover:bg-black/5 p-4 lg:p-4 cursor-pointer active:border-b-2",
    selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
    selected && status === "correct" && "border-green-300 bg-green-100 hover:bg-green-100",
    selected && status === "wrong" && "border-rose-300 bg-rose-100 hover:bg-rose-100",
    disabled && "pointer-events-none hover:bg-white",
    type === "ASSIST" && "lg:p-4 w-full"
  );

  // Determine text styles based on selection and status
  const textStyles = cn(
    "text-neutral-600 text-sm lg:text-base",
    selected && "text-sky-500",
    selected && status === "correct" && "text-green-500",
    selected && status === "wrong" && "text-rose-500"
  );

  // Determine shortcut styles based on selection and status
  const shortcutStyles = cn(
    "lg:w-[30px] lg:h-[30px] w-[20px] h-[20px] border-2 flex items-center justify-center rounded-lg text-neutral-400 lg:text-[15px] text-xs font-semibold",
    selected && "border-sky-300 text-sky-500",
    selected && status === "correct" && "border-green-500 text-green-500",
    selected && status === "wrong" && "border-rose-500 text-rose-500"
  );

  return (
    <div
      onClick={handleClick}
      className={cardStyles}
      role="button"
      aria-label={`Option: ${text}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
    >
      {audio}
      {imageSrc && (
        <div className="relative aspect-square mb-4 max-h-[100px] lg:max-h-[150px] w-full">
          <Image src={imageSrc} fill alt={text} />
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          type === "ASSIST" && "flex-row-reverse"
        )}
      >
        {type === "ASSIST" && <div />}
        {/* Text display for all types */}
        <p className={textStyles}>{text}</p>

        {/* Shortcut indicator (hidden for FILL_IN_THE_BLANK) */}
        {type !== "FILL_IN_THE_BLANK" && (
          <div className={shortcutStyles}>{shortcut}</div>
        )}
      </div>
    </div>
  );
};