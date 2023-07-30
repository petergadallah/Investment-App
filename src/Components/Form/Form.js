import { useState } from "react";
import styles from "./Form.module.css";
import Layout from "../UI/Layout";
import Input1 from "./Input1";
import Input2 from "./Input2";
import Input3 from "./Input3";
import Input4 from "./Input4";
export default function Form(props) {
  const [currentSavings, setcurrentSavings] = useState("");
  const [yearlyContribution, setyearlyContribution] = useState("");
  const [expectedReturn, setexpectedReturn] = useState("");
  const [duration, setDuration] = useState("");
  const [resultObject, setResultObject] = useState({});
  const changeCurrentSavings = (e) => {
    setcurrentSavings(e.target.value);
  };

  const changeYearlyContribution = (e) => {
    setyearlyContribution(e.target.value);
  };

  const changeExpectedReturn = (e) => {
    setexpectedReturn(e.target.value);
  };

  const changeDuration = (e) => {
    setDuration(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setResultObject({
      currentSavings,
      yearlyContribution,
      expectedReturn,
      duration,
    });
    props.sendToApp(resultObject);
  };
  const clearData = () => {
    props.clearData();
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Layout>
        <Input1 changeCurrentSavings={changeCurrentSavings} />
        <Input2 changeYearlyContribution={changeYearlyContribution} />
      </Layout>
      <Layout>
        <Input3 changeExpectedReturn={changeExpectedReturn} />
        <Input4 changeDuration={changeDuration} />
      </Layout>

      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={clearData}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
}
