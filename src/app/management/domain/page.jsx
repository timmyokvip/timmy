"use client";
import styles from "./style.module.css";
import Pagination from "../../../component/pagination/Pagination";
import { useState } from "react";
import icons from "../../../../public/icon/icon";
import ModalShow from "@/component/modal/modalShowDeleteDomain/ModalShow";

const table = [
  { name: "Tên domain" },
  { name: "Team" },
  { name: "Thương hiệu" },
  { name: "Quản lý" },
  { name: "Ghi chú" },
  { name: "Người tạo" },
  { name: "Ngày tạo" },
  { name: "Hành động" },
];

const domainArray = [
  {
    id: 1,
    domain: "google.com",
    team: "Team 10",
    brand: ".com",
    manager: "Nobita",
    note: "dùng chung 4 web",
    userCreate: "xuka",
    dateCreate: "19/09/2023",
  },
  {
    id: 2,
    domain: "youtube.com",
    team: "Team 7",
    brand: ".com",
    manager: "Xeko",
    note: "abczzz",
    userCreate: "ashe",
    dateCreate: "22/09/2023",
  },
  {
    id: 3,
    domain: "email.net",
    team: "Team 1",
    brand: ".net",
    manager: "black",
    note: "100 web",
    userCreate: "unknow",
    dateCreate: "22/09/2023",
  },
];

const UserManagement = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // select option
  const [selectOption, setSelectOption] = useState("");

  return (
    <div>
      <div className={styles.table}>
        <header className={`${styles.tableHead} ${styles.tableRow}`}>
          {table.map((item) => (
            <span className={styles.tableCell}>{item.name}</span>
          ))}
        </header>

        {domainArray.map((item, index) => {
          return (
            <>
              <div className={styles.tableRow}>
                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.domain}
                </span>

                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.team}
                </span>

                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.brand}
                </span>
                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.manager}
                </span>
                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.note}
                </span>

                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.userCreate}
                </span>

                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  {item.dateCreate}
                </span>
                <span className={`${styles.tableChild} ${styles.tableCell}`}>
                  <button
                    className={`${styles.btnDelete} ${styles.btn}`}
                    onClick={handleShowModal}
                  >
                    <icons.delete color="red" size={30} />
                  </button>
                </span>
              </div>
            </>
          );
        })}
      </div>

      <ModalShow
        show={showModal}
        onClose={handleCloseModal}
        message="Các dữ liệu liên quan sẽ bị xóa. "
        message2="Bạn có muốn xóa?"
      />
      <Pagination currentPage={currentPage} totalPage={5}></Pagination>
    </div>
  );
};

export default UserManagement;
