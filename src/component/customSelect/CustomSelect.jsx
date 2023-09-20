"use client";
import Form from "react-bootstrap/Form";
import styles from "./style.module.css";
import { useState } from "react";

function CustomSelect(props) {
  const [selectOption, setSelectOption] = useState("");

  return (
    <Form.Select
      aria-label="Default select example"
      className={styles.inputSelect}
    >
      {selectOption ? null : <option>{props.props}</option>}
      <option value="1">SEO</option>
      <option value="2">CTV</option>
    </Form.Select>
  );
}

export default CustomSelect;
