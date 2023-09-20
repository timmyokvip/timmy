"use client";
import styles from "./style.module.css";
import Pagination from "../../../component/pagination/Pagination";
import { useState } from "react";
import icons from "../../../../public/icon/icon";

const table = [
  { name: "Họ tên" },
  { name: "Tên đăng nhập" },
  { name: "Team" },
  { name: "Quyền hạn" },
  { name: "Phòng ban" },
  { name: "Hành động" },
];

const UserManagement = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [userArray, setUserArray] = useState([]);

  // const deleteUser = (user) => {
  //   const cloneArr = [...userArray];
  //   // tim index
  //   const findIndex = cloneArr.findIndex(
  //     (item) => item.userName === user.userName
  //   );

  //   if (findIndex !== -1) cloneArr.splice(findIndex, 1);

  //   // set lai arr
  //   setUserArray(cloneArr);
  // };

  const deleteUser = (userDelete) => {
    const cloneArray = userArray.filter((item, index) => {
      return item.userName !== userDelete.userName;
    });

    setUserArray(cloneArray);
  };

  return (
    <div>
      <div className={styles.table}>
        <header className={`${styles.tableHead} ${styles.tableRow}`}>
          {table.map((item) => (
            <span className={styles.tableCell}>{item.name}</span>
          ))}
        </header>

        {userArray.map((user, index) => {
          return (
            <div className={styles.tableRow}>
              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                {user.fullName}
              </span>

              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                {user.userName}
              </span>

              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                {user.team}
              </span>
              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                {user.role}
              </span>
              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                {user.department}
              </span>

              <span className={`${styles.tableChild} ${styles.tableCell}`}>
                <button className={`${styles.btnEdit} ${styles.btn}`}>
                  <icons.edit color="orange" size={30} />
                </button>
                <button
                  className={`${styles.btnDelete} ${styles.btn}`}
                  onClick={() => deleteUser(user)}
                >
                  <icons.delete color="red" size={30} />
                </button>
              </span>
            </div>
          );
        })}
      </div>

      <Pagination currentPage={currentPage} totalPage={5}></Pagination>
    </div>
  );
};

export default UserManagement;
