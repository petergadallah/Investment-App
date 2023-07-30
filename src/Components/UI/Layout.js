import styles from "./Layout.module.css";

export default function Layout(props) {
  return (
    <div className={`${styles["input-group"]} ${props.className}`}>
      {props.children}
    </div>
  );
}
