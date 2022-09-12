export default function ContactsItem({ contact: { name, number } }) {
  return (
    <li>
      {name}: {number}
    </li>
  );
}
