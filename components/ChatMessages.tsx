import { Message } from "ai";
import { Bot, User2 } from "lucide-react";
import Markdown from "./Markdown";

interface ChatMessagesProps {
  messages: Message[];
  isLoading: boolean;
}

export function ChatMessages({ messages, isLoading }: ChatMessagesProps) {
  return (
    <div
      id="chatbox"
      className="mt-4 flex w-full flex-col-reverse gap-4 whitespace-pre-wrap text-left"
    >
      {messages.map((m, index) => (
        <div
          key={index}
          className={`relative ml-10 rounded-md p-4 shadow-md ${
            m.role === "user" ? "bg-stone-300" : ""
          }`}
        >
          <Markdown text={m.content} />
          {m.role === "user" ? (
            <User2 className="absolute -left-10 top-2 rounded-full border p-1 shadow-lg" />
          ) : (
            <Bot
              className={`absolute -left-10 top-2 rounded-full border stroke-[#0842A0] p-1 shadow-lg ${
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
