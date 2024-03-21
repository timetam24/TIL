"use client";

import { useReducer } from "react";
import Chat from "@/containers/messenger/chat";
import ContactList from "@/containers/messenger/contact-list";
import {
  initialState,
  messengerReducer,
} from "@/containers/messenger/messenger-reducer";

export default function MessengerPage() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);

  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <main className="font-uniform flex flex-col min-h-screen sm:flex-row">
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact?.id}
        message={message || ""}
        contact={contact as Contact | undefined}
        dispatch={dispatch}
      />
    </main>
  );
}
export interface Contact {
  id: number;
  name: string;
  email: string;
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
