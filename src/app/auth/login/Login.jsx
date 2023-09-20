"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div style={{ backgroundColor: "#ffa827", padding: "150px" }}>
      <title>Đăng nhập</title>
      <div className={styles.formLogin}>
        <h1 className={styles.img}>
          <Image src="/LOGO-OKVIP.png" height={80} width={227} alt="Logo" />
        </h1>
        <form>
          <div>
            <div>
              <label htmlFor="username" className={styles.label}>
                Tên đăng nhập
              </label>
              <input
                type="text"
                className={styles.formInput}
                id="username"
                placeholder="Tên đăng nhập"
              />
            </div>
            <div>
              <label htmlFor="password" className={styles.label}>
                Mật khẩu
              </label>

              <input
                type="password"
                className={styles.formInput}
                id="password"
                placeholder="Mật khẩu"
              />
              <Link href="/">
                <div className={styles.forgotPass}>Quên mật khẩu?</div>
              </Link>
            </div>
          </div>
          <div>
            <div className={styles.rememberLogin}>
              <input type="checkbox" className={styles.checkbox}></input>
              <span style={{ fontWeight: "500" }}>Nhớ tài khoản</span>
            </div>
            <Link href="/management/user">
              <button type="submit" className={styles.btnLogin}>
                ĐĂNG NHẬP
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
