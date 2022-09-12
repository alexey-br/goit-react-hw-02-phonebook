import ContactsItem from './ContactsItem';

export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return <ContactsItem key={contact.id} contact={contact} />;
      })}
    </ul>
  );
}
