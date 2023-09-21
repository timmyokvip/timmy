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

const UserManagement = () => {
  const [domainArray, setDomainArray] = useState([
    {
      id: 1,
      domain: ".com",
      team: "Team 5",
      brand: "google",
      manager: "Mimi",
      note: "dùng chung 4",
      userCreate: "Xixi",
      dateCreate: "19/09/2023",
    },
    {
      id: 2,
      domain: ".vn",
      team: "Team 1",
      brand: "youtube",
      manager: "Xeko",
      note: "abczzz",
      userCreate: "Xuka",
      dateCreate: "22/09/2023",
    },
    {
      id: 3,
      domain: ".org",
      team: "Team 2",
      brand: "okvip",
      manager: "black",
      note: "100 web",
      userCreate: "unknow",
      dateCreate: "22/09/2023",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [domainDelete, setDomainDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [filterDomain, setFilterDomain] = useState("");
  const [arrayFilter, setArrayFilter] = useState(null);

  // data select
  const teamSelect = {
    name: "Team",
    id: "team",
    option: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
  };

  const brandSelect = {
    name: "Thương hiệu",
    id: "brand",
    option: ["google", "youtube", "apple"],
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDeleteDomain = (domainId) => {
    setShowModal(true);
    setDomainDelete(domainId);
  };

  // delete domain && updateData
  const confirmDelete = () => {
    const updatedDomains = domainArray.filter(
      (domain) => domain.id !== domainDelete
    );
    setDomainArray(updatedDomains);
    setShowModal(false);
    setDomainDelete(null);
  };

  // select option
  // Hàm xử lý khi thay đổi giá trị trong ô select Team
  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  // Hàm xử lý khi thay đổi giá trị trong ô select Brand
  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  //
  const handleFilter = () => {
    // Thực hiện logic lọc dữ liệu dựa trên selectedTeam và selectedBrand
    const filteredData =
      filterDomain === teamSelect.name || brandSelect.name
        ? [...domainArray]
        : domainArray.filter((item) => {
            const matchTeam = selectedTeam === "" || item.team === selectedTeam;
            const matchBrand =
              selectedBrand === "" || item.brand === selectedBrand;

            return matchTeam && matchBrand;
          });

    setArrayFilter(filteredData);
  };

  const renderTableUser = () => {
    let dataDomain = [];
    if (arrayFilter) dataDomain = arrayFilter;
    else dataDomain = domainArray;

    return dataDomain.map((item, index) => {
      return (
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
              style={{ marginRight: "12px" }}
            />

            {/* <CustomSelect
              textSelect="Team"
              option={["Team 1", "Team 2", "Team 3", "Team 4", "Tất cả"]}
              handleChangeSelect={(value) => setFilterDomain(value)}
            ></CustomSelect> */}

            {/* {arrSelect.map((data) => (
              <select
                onChange={handleChange}
                className={styles.inputSelect}
                key={data.id}
              >
                {selectOption ? null : (
                  <option value={data.name}>{data.name}</option>
                )}
                {data.option.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </select>
            ))} */}

            <select value={selectedTeam} onChange={handleTeamChange}>
              <option value="">{teamSelect.name}</option>
              {teamSelect.option.map((team) => (
                <option value={team}>{team}</option>
              ))}
            </select>
            <select value={selectedBrand} onChange={handleBrandChange}>
              <option value="">{brandSelect.name}</option>
              {brandSelect.option.map((brand) => (
                <option value={brand}>{brand}</option>
              ))}
            </select>

            <button className={styles.btn} onClick={handleFilter}>
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

        {renderTableUser()}
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
