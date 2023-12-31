"use client";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./addNewUser.module.css";
import icons from "../../../../public/icon/icon";
import { toast } from "react-toastify";
import { useEffect } from "react";

const initialUser = {
  fullName: " ",
  phoneNumber: "",
  email: "",
  userName: "",
  password: "",
  role: "",
  team: "",
  department: "",
};

function AddNewUser(props) {
  const [newUser, setNewUser] = useState({ ...initialUser });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.isEdit && show) {
      const cloneUserEdit = { ...props.userEdit };
      setNewUser(cloneUserEdit);
    }
  }, [props.userEdit, show]);
  const handleSubmit = () => {
    if (props.isEdit) {
      props.handleEditUser(newUser);
      // dong modal lai
      toast("Cập nhật user thành công");
    } else {
      // goi ham add user tu prop
      props.addUser(newUser);
      // dong modal lai

      toast("Thêm mới user thành công");
    }
    handleClose();
    setNewUser({ ...initialUser });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChangeUser = (value, key) => {
    const newUserClone = { ...newUser };
    newUserClone[key] = value;
    setNewUser(newUserClone);
  };

  // data input
  const arrInput = [
    {
      name: "Số điện thoại",
      placeHolder: "Số điện thoại",
      id: "phoneNumber",
    },

    { name: "Email", placeHolder: "Email", id: "email" },
    {
      name: "Tên đăng nhập",
      placeHolder: "Tên đăng nhập",
      id: "userName",
    },
    {
      name: "Mật khẩu",
      placeHolder: "Mật khẩu",
      id: "password",
    },
  ];
  // data select
  const arrSelect = [
    {
      name: "Quyền hạn",
      id: "role",
      option: ["SEO", "CTV"],
    },
    {
      name: "Team",
      id: "team",
      option: ["Team 1", "Team 2", "Team 3", "Team 4", "Team 5"],
    },
    {
      name: "Phòng ban",
      id: "department",
      option: ["Phòng ban cũ", "Phòng ban mới"],
    },
  ];

  return (
    <div>
      {props.isEdit ? (
        <button
          onClick={handleShow}
          className={`${style.btnEdit} ${style.btn}`}
        >
          <icons.edit color="orange" size={30} />
        </button>
      ) : (
        <Button onClick={handleShow} className={style.btnAddNewUser}>
          <icons.plus size={30} />
          Thêm user mới
        </Button>
      )}

      <Modal show={show} onHide={handleClose} id="modal" className="modal-lg">
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "-12px 0" }}>
            {props.isEdit ? "Chỉnh sửa user" : "Thêm user mới"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <section>
              <h5 className={style.title}>thông tin user</h5>

              <label htmlFor="name" className={style.label}>
                Họ và tên
              </label>
              <input
                type="text"
                value={newUser.fullName}
                className={`${style.formInput} ${style.inputName} `}
                id="name"
                placeholder="Họ và tên"
                required
                onChange={(e) => handleChangeUser(e.target.value, "fullName")}
              />

              <div className={style.inputContainer}>
                {arrInput.map((item) => (
                  <div className={style.inputGroup} key={item.id}>
                    <label htmlFor={item.id} className={style.label}>
                      {item.name}
                    </label>
                    <input
                      value={newUser[item.id]}
                      disabled={
                        item.id === "userName" && props.isEdit == true
                          ? true
                          : false
                      }
                      type="text"
                      className={style.formInput}
                      id={item.id}
                      placeholder={item.placeHolder}
                      required
                      onChange={(e) =>
                        handleChangeUser(e.target.value, item.id)
                      }
                    />
                  </div>
                ))}
              </div>
            </section>

            <section style={{ marginTop: "24px" }}>
              <h5 className={style.title}>thông tin quản lý</h5>

              <div className={style.selectContainer}>
                {arrSelect.map((item) => (
                  <div className={style.selectGroup} key={item.id}>
                    <label htmlFor="selectOption" className={style.label}>
                      {item.name}
                    </label>
                    <select
                      id="selectOption"
                      value={newUser[item.id]}
                      onChange={(e) =>
                        handleChangeUser(e.target.value, item.id)
                      }
                      className={style.selectInput}
                    >
                      {newUser[item.id] ? null : <option>-- Chọn --</option>}
                      {item.option.map((item) => (
                        <option value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </section>
          </form>
        </Modal.Body>

        <Modal.Footer style={{ borderTop: "none" }}>
          <Button
            onClick={handleSubmit}
            className={style.btnModal}
            type="submit"
          >
            {props.isEdit ? "Lưu" : "Thêm mới"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddNewUser;
