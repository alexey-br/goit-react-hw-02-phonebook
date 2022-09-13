export default function Filter({ text, onInput }) {
  return (
    <label>
      Find contacts by name:
      <input type="text" value={text} onChange={onInput} />
    </label>
  );
}
