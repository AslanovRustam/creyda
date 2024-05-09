import { useState } from "react";
import { useFormik } from "formik";
import Button from "../Button/Button";
import PopUp from "../PopUp/PopUp";
import { ReactComponent as Design } from "../../images/services/graphic.svg";
import s from "./contacts.module.css";
// import toast, { Toaster } from "react-hot-toast";

export default function ContactsFormik({ t }) {
  const [formSend, setFormSend] = useState(false);
  const [notification, setNotification] = useState("");

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = t("contacts.errors.required");
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
        values.name
      )
    ) {
      errors.name = t("contacts.errors.name");
    }

    // if (!values.number) {
    //   errors.number = "This field is required";
    // } else if (!/^(\+?[0-9.\(\)\-\s]*)$/.test(values.number)) {
    //   errors.number = "Invalid phone number";
    // } else if (values.number.length < 5) {
    //   errors.number = "Too short phone number";
    // }

    if (!values.email) {
      errors.email = t("contacts.errors.required");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = t("contacts.errors.email");
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      message: "",
      privacy_agree: false,
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      if (values.privacy_agree) {
        return;
      }

      try {
        const response = await fetch("/action.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: values.email,
            number: values.number,
            name: values.name,
            message: values.message,
          }),
        });
        if (response.status === 200) {
          setNotification(
            `${t("contacts.toastSUCCESS.firstPart")} ${values.name}, ${t(
              "contacts.toastSUCCESS.secondPart"
            )}`
          );
          setFormSend(true);
          return;
        }
        setNotification(t("contacts.toastERROR"));
        setFormSend(true);
      } catch (error) {
        console.log(error);
      }

      // if (response.status === 200) {
      //   toast.success(
      // `${t("contacts.toastSUCCESS.firstPart")} ${values.name}, ${t(
      //   "contacts.toastSUCCESS.secondPart"
      // )}`
      //   );
      // } else {
      //   toast.error(t("contacts.toastERROR"));
      // }
      resetForm();
    },
  });

  return (
    <div className={s.container} id="write">
      <form className={s.form}>
        <p className={s.title}>{t("contacts.title")}</p>
        <label className={s.label}>
          <p className={s.name}>{t("contacts.name.name")}</p>
          <input
            className={`${s.input} ${
              formik.touched.name && formik.errors.name && s.errorBorder
            }`}
            id="name"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            type="text"
            placeholder={t("contacts.name.placeholder")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={s.errorMessage}>{formik.errors.name}</div>
          ) : null}
        </label>
        <label className={s.label}>
          <p className={s.name}>{t("contacts.phone.name")}</p>
          <input
            className={s.input}
            id="number"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            type="tel"
            placeholder={t("contacts.phone.placeholder")}
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>{t("contacts.email.name")}</p>
          <input
            className={`${s.input} ${
              formik.touched.email && formik.errors.email && s.errorBorder
            }`}
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            type="email"
            placeholder={t("contacts.email.placeholder")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={s.errorMessage}>{formik.errors.email}</div>
          ) : null}
        </label>
        <label className={s.label}>
          <p className={s.name}>{t("contacts.message.name")}</p>
          <input
            className={s.input}
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            type="text"
            placeholder={t("contacts.message.placeholder")}
          />
        </label>

        <input
          className={s.checkbox}
          id="checkbox"
          name="privacy_agree"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.checkbox}
          type="checkbox"
        />

        <Button
          text={t("contacts.btnText")}
          type="submit"
          onBtnClick={formik.handleSubmit}
          colorBlack
        />
      </form>
      <div className={s.imageContainer}>
        <Design className={s.icon} />
      </div>
      {/* <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#daff8c",
              secondary: "black",
            },
          },
          error: {
            iconTheme: {
              primary: "#eb5757",
              secondary: "#ffffff",
            },
          },
        }}
      /> */}
      {formSend && (
        <PopUp t={t} notification={notification} setVisible={setFormSend} />
      )}
    </div>
  );
}
