export default function Input3(props) {
  return (
    <p>
      <label htmlFor="expected-return">Expected Interest (%, per year)</label>
      <input
        type="number"
        id="expected-return"
        onChange={props.changeExpectedReturn}
      />
    </p>
  );
}
