"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.css";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

const itemNavs = [
  {
    icon: <FaUserCircle size={32} />,
    name: "Quản lý user",
    href: "/management/user",
  },
  {
    icon: <RiGlobalLine size={32} />,
    name: "Quản lý domain",
    href: "/management/domain",
  },
];

const Nav = () => {
  const pathName = usePathname();
  console.log(pathName);

  return (
    <nav className={styles.managementNav}>
      <Link href="/">
        <Image src="/LOGO-OKVIP.png" width={158} height={56} alt="logo" />
      </Link>
      <ul className={styles.itemNav}>
        {itemNavs.map((link) => {
          const isActive = pathName === link.href;

          return (
            <Link
              href={link.href}
              key={link.name}
              className={`${styles.nameList} ${
                isActive ? `${styles.navItemActive}` : ""
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
