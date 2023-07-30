import styles from "./TableData.module.css";
export default function TableData(props) {
  const { year, yearlyInterest, savingsEndOfYear, yearlyContribution } =
    props.data;
  return (
    <tbody className={styles["table-data"]}>
      <tr>
        <td>{year}</td>
        <td>{yearlyInterest}</td>
        <td>{savingsEndOfYear}</td>
        <td>{savingsEndOfYear}</td>
        <td>{yearlyContribution}</td>
      </tr>
    </tbody>
  );
}
