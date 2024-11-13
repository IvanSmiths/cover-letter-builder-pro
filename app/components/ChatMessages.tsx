import { Message } from "ai";
import { Bot, User2 } from "lucide-react";
import Markdown from "./Markdown";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div id="chatbox" className="flex flex-col-reverse w-full text-left mt-4 gap-4 whitespace-pre-wrap">
      {messages.map((m, index) => (
        <div
          key={index}
          className={`p-4 shadow-md rounded-md ml-10 relative ${
            m.role === "user" ? "bg-stone-300" : ""
          }`}
        >
          <Markdown text={m.content} />
          {m.role === "user" ? (
            <User2 className="absolute top-2 -left-10 border rounded-full p-1 shadow-lg" />
          ) : (
            <Bot
              className={`absolute top-2 -left-10 border rounded-full p-1 shadow-lg stroke-[#0842A0] ${
                isLoading && index === messages.length - 1
                  ? "animate-bounce"
                  : ""
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
} 