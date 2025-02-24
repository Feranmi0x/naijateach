import { challengeOptions, challenges } from "@/db/schema";
import { cn } from "@/lib/utils";
import { Card } from "./card";

type Props = {
  options: typeof challengeOptions.$inferSelect[];
  onSelect: (id: number, answer?: string) => void; // Add answer for fill-in-the-blank
  status: "correct" | "wrong" | "none";
  selectedOption?: number;
  disabled?: boolean;
  type: typeof challenges.$inferSelect["type"];
  challengeText?: string; // For FILL_IN_THE_BLANK
};

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
  challengeText,
}: Props) => {
  return (
    <div
      className={cn(
        "grid gap-2",
        type === "ASSIST" && "grid-cols-1",
        type === "SELECT" &&
          "grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(0,1fr))]",
        type === "FILL_IN_THE_BLANK" && "grid-cols-1"
      )}
    >
      {type === "FILL_IN_THE_BLANK" ? (
        <Card
          id={0} // No predefined option ID
          text={challengeText || ""}
          imageSrc={null}
          shortcut=""
          selected={false}
          onClick={() => {}} // No click interaction needed
          status={status}
          audioSrc={null}
          disabled={disabled}
          type={type}
        />
      ) : (
        options.map((option, i) => (
          <Card
            key={option.id}
            id={option.id}
            text={option.text}
            imageSrc={option.imageSrc}
            shortcut={`${i + 1}`}
            selected={selectedOption === option.id}
            onClick={() => onSelect(option.id)}
            status={status}
            audioSrc={option.audioSrc}
            disabled={disabled}
            type={type}
          />
        ))
      )}
    </div>
  );
};