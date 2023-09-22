import s from "./contacts.module.css";
import { ReactComponent as Design } from "../../images/services/graphic.svg";
import Button from "../Button/Button";
import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    message: "",
  });
  const [showErrors, setShowErrors] = useState({
    name: false,
    number: false,
    email: false,
    message: false,
  });

  const onBtnClick = (e) => {
    e.preventDefault();
    const newShowErrors = {};
    let hasError = false;
    Object.keys(formData).forEach((inputKey) => {
      if (!formData[inputKey]) {
        newShowErrors[inputKey] = true;
        hasError = true;
      } else {
        newShowErrors[inputKey] = false;
      }
    });
    setShowErrors(newShowErrors);

    if (!hasError) {
      console.log("click", formData);
      setFormData({
        name: "",
        number: "",
        email: "",
        message: "",
      });
    }
  };

  const handleCHange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (
      name === "name" &&
      !/^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(value)
    ) {
      setShowErrors({ ...showErrors, [name]: true });
    }
    if (
      name === "number" &&
      !/\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/.test(
        value
      )
    ) {
      setShowErrors({ ...showErrors, [name]: true });
    }
  };

  console.log("formData", formData);
  console.log("showErrors", showErrors);
  return (
    <div className={s.container} id="write">
      <form className={s.form}>
        <p className={s.title}>Contact us</p>
        <label className={s.label}>
          <p className={s.name}>Enter your name</p>
          <input
            className={s.input}
            name="name"
            value={formData.name}
            onChange={handleCHange}
            onBlur={handleBlur}
            type="text"
            placeholder="NAME"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your phone number</p>
          <input
            className={s.input}
            name="number"
            value={formData.number}
            onChange={handleCHange}
            onBlur={handleBlur}
            type="tel"
            placeholder="NUMBER"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your email</p>
          <input
            className={s.input}
            name="email"
            value={formData.email}
            onChange={handleCHange}
            onBlur={handleBlur}
            type="email"
            placeholder="EMAIL"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your message</p>
          <input
            className={s.input}
            name="message"
            value={formData.message}
            onChange={handleCHange}
            onBlur={handleBlur}
            type="text"
            placeholder="Message"
          />
        </label>
        <Button text="Send" type="submit" onBtnClick={onBtnClick} colorBlack />
      </form>
      <div className={s.imageContainer}>
        <Design className={s.icon} />
      </div>
    </div>
  );
}
