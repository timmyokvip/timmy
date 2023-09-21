"use client";
import style from "./style.module.css";
import icons from "../../../../public/icon/icon";

const ModalShow = ({ onClose, message, message2, onDelede }) => {
  return (
    <div className={style.modalOverlay} onClick={onClose}>
      <div className={style.modal}>
        <header className={style.modalHead}>
          <icons.exclamation size={40} color="#C63131" />
          <h4>Xóa dữ liệu</h4>
        </header>
        <section className={style.message}>
          <p>{message}</p>
          <p>{message2}</p>
        </section>
        <footer className={style.modalFooter}>
          <a onClick={onClose} style={{ color: "blue", cursor: "pointer" }}>
            Quay về
          </a>
          <button onClick={onDelede} className={style.modalBtn}>
            <icons.delete size={24} />
            Xóa
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ModalShow;
