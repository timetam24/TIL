"use client";

import { useState } from "react";
import Chat from "@/containers/messenger/chat";
import ContactList from "@/containers/messenger/contact-list";

export default function MessengerPage() {
  const [to, setTo] = useState(contacts[0]);
  return (
    <main className="font-uniform flex flex-col min-h-screen sm:flex-row">
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} />
      {/* Chat 컴포넌트에 key를 주어서 하위 트리가 초기화되도록 한다.
          다른 수신자를 선택할 때마다 Chat 컴포넌트의 State는 초기화되어서
          수신자를 바꿀 때마다 입력란은 비워진다.
      */}
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
