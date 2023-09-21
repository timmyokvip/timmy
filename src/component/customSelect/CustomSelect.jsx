"use client";
import Form from "react-bootstrap/Form";
import styles from "./style.module.css";
import { useState } from "react";

function CustomSelect(props) {
  const { textSelect, option, handleChangeSelect } = props;
  const [selectOption, setSelectOption] = useState(null);

  return (
    <Form.Select
      aria-label="Default select example"
      className={styles.inputSelect}
      value={selectOption}
      onChange={(e) => handleChangeSelect(e.target.value)}
    >
      <option disabled selected value>
        {textSelect}
      </option>
      {option &&
        option.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
    </Form.Select>
  );
}

export default CustomSelect;
