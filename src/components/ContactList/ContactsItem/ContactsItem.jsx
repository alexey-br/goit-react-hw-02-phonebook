export default function ContactsItem({
  contact: { id, name, number },
  onDeleteContact,
}) {
  return (
    <li>
      {name}: {number}{' '}
      <button onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
