"use client";
import styles from "./style.module.css";
import Pagination from "../../../component/pagination/Pagination";
import { useState } from "react";
import icons from "../../../../public/icon/icon";
import ModalShow from "@/component/modal/modalShowDeleteDomain/ModalShow";
import CustomSelect from "@/component/customSelect/CustomSelect";

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

const UserManagement = () => {
  const [domainArray, setDomainArray] = useState([
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
  ]);

  const [showModal, setShowModal] = useState(false);
  const [domainDelete, setDomainDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteDomain = (domainId) => {
    setShowModal(true);
    setDomainDelete(domainId);
  };

  // Hàm xác nhận xóa domain và cập nhật danh sách
  const confirmDelete = () => {
    const updatedDomains = domainArray.filter(
      (domain) => domain.id !== domainDelete
    );
    setDomainArray(updatedDomains);
    setShowModal(false);
    setDomainDelete(null);
  };

  // select option
  const [selectOption, setSelectOption] = useState("");

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

            <select
              id="mySelect"
              // onChange={handleChange}
              className={styles.inputSelect}
            >
              {selectOption ? null : <option>Thương hiệu</option>}
              <option value="Google">Google</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Amazon">Amazon</option>
            </select>

            <button className={styles.btn} onClick={() => handleFilterRole()}>
              Lọc
            </button>
          </div>
        </div>
      </section>

      <div className={styles.table}>
        <header className={`${styles.tableHead} ${styles.tableRow}`}>
          {table.map((item) => (
            <span className={styles.tableCell}>{item.name}</span>
          ))}
        </header>

        {domainArray.map((item, index) => {
          return (
            <>
              <div className={styles.tableRow} key={item.id}>
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
                    className={`${styles.btnDelete} ${styles.btnDelete}`}
                    onClick={() => handleDeleteDomain(item.id)}
                  >
                    <icons.delete color="red" size={30} />
                  </button>
                </span>
              </div>
            </>
          );
        })}
      </div>

      {showModal && (
        <ModalShow
          onClose={handleCloseModal}
          onDelede={confirmDelete}
          message="Các dữ liệu liên quan sẽ bị xóa. "
          message2="Bạn có muốn xóa?"
        />
      )}
      <Pagination currentPage={currentPage} totalPage={5}></Pagination>
    </div>
  );
};

export default UserManagement;
