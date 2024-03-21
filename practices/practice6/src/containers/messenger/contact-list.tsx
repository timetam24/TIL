import { Contact } from "@/app/messenger/page";
import clsx from "clsx";
interface ContactListProps {
  contacts: Contact[];
  selectedId: number;
  dispatch: React.Dispatch<any>;
}

export default function ContactList({
  contacts,
  selectedId,
  dispatch,
}: ContactListProps) {
  return (
    <section className="bg-blue-50 w-full sm:w-60 border-r-2">
      <ul className="flex sm:flex-col flex-row py-6 sm:py-10 gap-2 sm:gap-6 px-5 h-full justify-center sm:justify-start">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              className={clsx(
                " w-full min-h-full py-2 rounded hover:bg-black text-lg text-center hover:text-white border-2 sm:px-0 px-7 font-inter",
                {
                  "bg-black text-white": selectedId === contact.id,
                  "bg-white text-black": selectedId !== contact.id,
                }
              )}
              onClick={() => {
                dispatch({ type: "changed_selection", contactId: contact.id });
              }}
            >
              {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
