"use client";

import Footer from "@/component/footer/Footer";
import Nav from "@/component/nav/Nav";
import styles from "./layout.module.css";
import icons from "../../../public/icon/icon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathName = usePathname();
  const [pageTitle, setPageTitle] = useState("Quản lý user");

  useEffect(() => {
    if (pathName === "/management/user") {
      setPageTitle("Quản lý user");
    } else if (pathName === "/management/domain") {
      setPageTitle("Quản lý domain");
    }
  }, [pathName]);

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
          {children}
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
}
