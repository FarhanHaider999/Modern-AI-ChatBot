import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface MessageProps {
  content: string
  isUserMessage: boolean
}

export const Message = ({ content, isUserMessage }: MessageProps) => {
  return (
    <div
      className={cn("rounded-lg p-4", {
        "bg-zinc-800": isUserMessage,
        "bg-zinc-900/25": !isUserMessage,
      })}
    >
      <div className="max-w-3xl mx-auto flex items-start gap-4">
        <div
          className={cn(
            "h-10 w-10 shrink-0 aspect-square rounded-full border border-zinc-700 flex justify-center items-center",
            {
              "bg-blue-950 border-blue-700 text-zinc-200": isUserMessage,
              "bg-zinc-900 text-white": !isUserMessage, // Ensure both cases have text-white
            }
          )}
        >
          {isUserMessage ? (
            <User className="h-5 w-5" />
          ) : (
            <Bot className="h-5 w-5" />
          )}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-white"> 
              {isUserMessage ? "You" : "Website"}
            </span>
          </div>
          <p className="text-sm font-normal py-2.5 text-white"> 
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}
