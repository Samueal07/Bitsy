"use client";

import { db } from "@/firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { send } from "process";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import ModelSelection from "./ModelSelection";
import useSWR from "swr";
type Props = {
  chatId: string;
};
const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState("");
  const { data: session } = useSession();

  const { data: model } = useSWR("model", {
    fallbackData: "text-davinci-003",
  });

  //use SWR to get Model

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = prompt.trim();
    setPrompt("");

    // creating a message to be added to the frebase db
    // this is actually the 2nd argument of collection function used
    // on line 38
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar:
          session?.user?.image! ||
          `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        "users",
        session?.user?.email!,
        "chats",
        chatId,
        "messages"
      ),
      message
    );

    // Toaster Notification
    const notifications = toast.loading("bitsy is thinking...");
    await fetch("/api/askQuestion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        session,
      }),
    }).then(() => {
      // on sending the message
      // to repace toaster loading notification
      toast.success("Bitsy got your Question!", {
        id: notifications,
      });
    });
  };
  // console.log(prompt);
  return (
    <div
      className="bg-gray-700/50 text-gray-400 rounded-lg text-sm 
   
    "
    >
      <form onSubmit={sendMessage} action="" className="p-5 flex space-x-5">
        <input
          className="bg-transparent  focus:outline-none flex-1
          disabled:cursor-not-allowed disabled:text-gray-300
          "
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="ask your question..."
        />

        <button
          disabled={!prompt || !session}
          className="bg-[#5e17eb] hover:opacity-50 text-white font-bold
          px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed
          "
          type="submit"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>

      <div className="md:hidden">
        {/*selecting ai model */}
        <ModelSelection />
      </div>
    </div>
  );
};

export default ChatInput;
