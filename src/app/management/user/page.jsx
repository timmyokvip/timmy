"use client";
import styles from "./style.module.css";
import Pagination from "../../../component/pagination/Pagination";
import { useState } from "react";
import icons from "../../../../public/icon/icon";
import CustomSelect from "@/component/customSelect/CustomSelect";
import AddNewUser from "@/component/modal/modalShowAddUser/AddNewUser";

const table = [
  { name: "Họ tên" },
  { name: "Tên đăng nhập" },
  { name: "Team" },
  { name: "Quyền hạn" },
  { name: "Phòng ban" },
  { name: "Hành động" },
];

const UserManagement = () => {
  const [filterUser, setFilterUser] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // add user
  const [userArray, setUserArray] = useState([]);

  // select
  const [selectOption, setSelectOption] = useState("");
  const [arrayFilter, setArrayFilter] = useState(null);

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  const handleFilterRole = () => {
    const newUserArrFilter =
      filterUser === "Tất cả"
        ? [...userArray]
        : userArray.filter((user) => user.role === filterUser);

    setArrayFilter(newUserArrFilter);
  };

  const handleAddNewUser = (newUser) => {
    const cloneArr = [...userArray];

    cloneArr.push(newUser);
    setUserArray(cloneArr);
  };

  //edit user

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

  const handleEditUser = (userEdit) => {
    const cloneUserArray = [...userArray];

    const userIndex = cloneUserArray.findIndex(
      (item) => item.userName === userEdit.userName
    );

    if (userIndex !== -1) {
      cloneUserArray[userIndex] = userEdit;
    }

    setUserArray(cloneUserArray);
  };

  const renderTableUser = () => {
    let dataUser = [];
    if (arrayFilter) dataUser = arrayFilter;
    else dataUser = userArray;

    return dataUser.map((user, index) => {
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

          <span
            className={`${styles.tableChild} ${styles.tableCell}`}
            style={{ display: "flex" }}
          >
            <AddNewUser
              isEdit={true}
              userEdit={user}
              handleEditUser={handleEditUser}
            />
            <button
              className={`${styles.btnDelete} ${styles.btnDelete}`}
              onClick={() => deleteUser(user)}
            >
              <icons.delete color="red" size={30} />
            </button>
          </span>
        </div>
      );
    });
  };

  return (
    <div>
      <section className={styles.managementBody}>
        <div className={styles.managementOption}>
          <div className={styles.inputGroup}>
            <input
              className={styles.inputSearch}
              placeholder="Tìm kiếm thành viên"
            />

            <CustomSelect
              textSelect="phân quyền"
              option={["SEO", "CTV", "Tất cả"]}
              handleChangeSelect={(value) => setFilterUser(value)}
            ></CustomSelect>

            {/* <select
              id="mySelect"
              onChange={handleChange}
              className={styles.inputSelect}
            >
              {selectOption ? null : <option>Thương hiệu</option>}
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>
            </select> */}

            <button className={styles.btn} onClick={() => handleFilterRole()}>
              Lọc
            </button>
          </div>

          <AddNewUser addUser={handleAddNewUser}></AddNewUser>
        </div>
      </section>

      <div className={styles.table}>
        <header className={`${styles.tableHead} ${styles.tableRow}`}>
          {table.map((item) => (
            <span className={styles.tableCell}>{item.name}</span>
          ))}
        </header>
        {renderTableUser()}
      </div>

      <Pagination currentPage={currentPage} totalPage={5}></Pagination>
    </div>
  );
};

export default UserManagement;
