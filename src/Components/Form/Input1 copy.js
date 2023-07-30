export default function Input1(props) {
  return (
    <p>
      <label htmlFor="current-savings">Current Savings ($)</label>
      <input
        type="number"
        id="current-savings"
        onChange={props.changeCurrentSavings}
      />
    </p>
  );
}
