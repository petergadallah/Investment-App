import TableData from "./TableData";
import styles from "./Table.module.css";
export default function Table(props) {
  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      {props.items.map((e) => (
        <TableData data={e} key={Math.random()} />
      ))}
    </table>
  );
}
