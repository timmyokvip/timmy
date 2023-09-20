"use client";

import Footer from "@/component/footer/Footer";
import Nav from "@/component/nav/Nav";
import styles from "./layout.module.css";
import icons from "../../../public/icon/icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import CustomSelect from "@/component/customSelect/CustomSelect";
import AddNewUser from "@/component/modal/modalShowAddUser/AddNewUser";

export default function Layout({ children }) {
  // select
  const [selectOption, setSelectOption] = useState("");

  const handleChange = (e) => {
    setSelectOption(e.target.value);
  };

  const pathName = usePathname();
  const [pageTitle, setPageTitle] = useState("Quản lý user");
  const [inputTitle, setInputTitle] = useState("Tìm kiếm thành viên");
  const [nameSelect, setNameSelect] = useState("Phân quyền");

  useEffect(() => {
    if (pathName === "/management/user") {
      setPageTitle("Quản lý user");
    } else if (pathName === "/management/domain") {
      setPageTitle("Quản lý domain");
    }

    pathName === "/management/user"
      ? setInputTitle("Tìm kiếm thành viên")
      : setInputTitle("Tìm kiếm domain");

    pathName === "/management/user"
      ? setNameSelect("Phân quyền")
      : setNameSelect("Team");
  }, [pathName]);

  // add user
  const [userArray, setUserArray] = useState([]);

  const handleAddNewUser = (newUser) => {
    const cloneArr = [...userArray];

    cloneArr.push(newUser);
    setUserArray(cloneArr);
  };

  return (
    <section>
      <div className={styles.management}>
        <Nav></Nav>
        <div className={styles.managementGroup}>
          <header className={styles.managementHead}>
            <h1 className={styles.titlename}>{pageTitle}</h1>
            <p className={styles.fanpage}>
              <Image
                src="/avatar.svg"
                width={50}
                height={50}
                style={{ marginRight: "12px" }}
                alt="avatar"
              ></Image>
              admin
              <icons.arrowDown style={{ marginLeft: "12px" }} />
            </p>
          </header>

          <section className={styles.managementBody}>
            <div className={styles.managementOption}>
              <div className={styles.inputGroup}>
                <input
                  className={styles.inputSearch}
                  placeholder={inputTitle}
                />

                <CustomSelect props={nameSelect}></CustomSelect>

                {pathName === "/management/user" ? (
                  ""
                ) : (
                  <select
                    id="mySelect"
                    onChange={handleChange}
                    className={styles.inputSelect}
                  >
                    {selectOption ? null : <option>Thương hiệu</option>}
                    <option value="Google">Google</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Amazon">Amazon</option>
                  </select>
                )}

                <button className={styles.btn}>Lọc</button>
              </div>

              {pathName === "/management/user" ? (
                <AddNewUser addUser={handleAddNewUser}></AddNewUser>
              ) : (
                ""
              )}
            </div>

            {children}
          </section>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
