"use client";

import { useState } from "react";
import { Contact } from "@/app/messenger/page";

export default function Chat({ contact }: { contact: Contact }) {
  const [text, setText] = useState("");
  return (
    <section className="bg-violet-200 w-full flex flex-col items-center min-h-screen">
      <h1 className="text-4xl sm:mt-10 mt-16 mb-10">Chat To {contact.name}</h1>
      <div className="w-80 h-full max-h-96 relative">
        <textarea
          value={text}
          placeholder="Type your message here..."
          onChange={(e) => setText(e.target.value)}
          className="rounded-md resize-none outline-0 p-3 w-full h-96 border-[3px] border-violet-300 text-lg sm:h-full"
        />
        <button className="bg-violet-100 px-4 py-2 rounded absolute bottom-4 right-4 border-[3px] border-violet-300 hover:bg-violet-300">
          Send
        </button>
      </div>
    </section>
  );
}
