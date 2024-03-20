import { Contact } from "@/app/messenger/page";

interface ContactListProps {
  selectedContact: Contact;
  contacts: Contact[];
  onSelect: (contact: Contact) => void;
}

export default function ContactList({
  selectedContact,
  contacts,
  onSelect,
}: ContactListProps) {
  return (
    <section className="bg-blue-50 w-full sm:w-60 border-r-2">
      <ul className="flex sm:flex-col flex-row py-6 sm:py-10 gap-2 sm:gap-6 px-5 h-full justify-center sm:justify-start">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className="bg-white w-full min-h-full py-2 rounded hover:bg-black text-lg text-center text-black hover:text-white border-2 sm:px-0 px-7"
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
