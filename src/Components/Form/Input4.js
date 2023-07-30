export default function Input4(props) {
  return (
    <p>
      <label htmlFor="duration">Investment Duration (years)</label>
      <input type="number" id="duration" onChange={props.changeDuration} />
    </p>
  );
}
