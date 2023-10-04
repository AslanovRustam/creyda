import { useFormik } from "formik";
import Button from "../Button/Button";
import { ReactComponent as Design } from "../../images/services/graphic.svg";
import s from "./contacts.module.css";

export default function ContactsFormik() {
  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "This field is required";
    } else if (
      !/^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
        values.name
      )
    ) {
      errors.name = "Enter a valid name";
    }

    // if (!values.number) {
    //   errors.number = "This field is required";
    // } else if (!/^(\+?[0-9.\(\)\-\s]*)$/.test(values.number)) {
    //   errors.number = "Invalid phone number";
    // } else if (values.number.length < 5) {
    //   errors.number = "Too short phone number";
    // }

    if (!values.email) {
      errors.email = "This field is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  };

  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     number: "",
  //     email: "",
  //     message: "",
  //   },
  //   validate,
  //   onSubmit: (values, { resetForm }) => {
  //     console.log(values);
  //     resetForm();
  //   },
  // });
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const response = await fetch("https://aslanovrg@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.status === 200) {
        console.log("good");
      } else {
        console.log("bad");
      }
      resetForm();
    },
  });

  return (
    <div className={s.container} id="write">
      <form className={s.form}>
        <p className={s.title}>Contact us</p>
        <label className={s.label}>
          <p className={s.name}>Enter your name</p>
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
            placeholder="NAME"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className={s.errorMessage}>{formik.errors.name}</div>
          ) : null}
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your phone number</p>
          <input
            className={s.input}
            id="number"
            name="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.number}
            type="tel"
            placeholder="NUMBER"
          />
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your email</p>
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
            placeholder="EMAIL"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={s.errorMessage}>{formik.errors.email}</div>
          ) : null}
        </label>
        <label className={s.label}>
          <p className={s.name}>Enter your message</p>
          <input
            className={s.input}
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            type="text"
            placeholder="Message"
          />
        </label>
        <Button
          text="Send"
          type="submit"
          onBtnClick={formik.handleSubmit}
          colorBlack
        />
      </form>
      <div className={s.imageContainer}>
        <Design className={s.icon} />
      </div>
    </div>
  );
}
