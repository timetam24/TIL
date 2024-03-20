"use client";

import { useState } from "react";

interface Contact {
  id: number;
  name: string;
  email: string;
}

export default function Contact({ contact }: { contact: Contact }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <p>
        <b>{contact.name}</b>
      </p>
      {expanded && (
        <p className="mb-3">
          <i>{contact.email}</i>
        </p>
      )}
      <button
        onClick={() => {
          setExpanded(!expanded);
        }}
        className="bg-white w-max ml-auto px-3 py-1 rounded hover:bg-black hover:text-slate-100 "
      >
        {expanded ? "Hide" : "Show"} email
      </button>
    </>
  );
}
