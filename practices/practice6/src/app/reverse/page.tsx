"use client";

import { useState } from "react";
import Contact from "@/containers/reverse/contact";

export default function ReversePage() {
  const [reverse, setReverse] = useState(false);

  const displayedContacts = [...contacts];
  if (reverse) {
    displayedContacts.reverse();
  }

  return (
    <main className="font-inter text-2xl w-full min-h-screen flex flex-col justify-center items-center">
      <div className="bg-slate-200 p-8 rounded flex flex-col gap-6 border-2 border-black shadow">
        <label>
          <input
            className="w-4 h-4 mr-1"
            type="checkbox"
            checked={reverse}
            onChange={(e) => {
              setReverse(e.target.checked);
            }}
          />{" "}
          Show in reverse order
        </label>
        <ul className="flex flex-col gap-4">
          {displayedContacts.map((contact, i) => (
            <li key={contact.id} className="flex flex-col">
              {/* 배열의 i(인덱스)가 아닌 연락처 id를 key로 사용하여
                  State가 각 특정 연락처와 연관되도록 한다. */}
              <Contact contact={contact} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

const contacts = [
  { id: 0, name: "Alice", email: "alice@mail.com" },
  { id: 1, name: "Bob", email: "bob@mail.com" },
  { id: 2, name: "Taylor", email: "taylor@mail.com" },
];
