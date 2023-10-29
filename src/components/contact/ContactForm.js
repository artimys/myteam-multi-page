"use client";

import { useFormik } from "formik";
import * as yup from "yup";

function ContactForm() {
  const onSubmit = async (values, actions) => {
    actions.setStatus({ success: "" });
    console.log("submitting form", values);

    // Mock API call to send email using a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("submitted");
    actions.resetForm();

    actions.setStatus({ success: "Your form was submitted successfully." });

    // Clear status message after a few seconds
    setTimeout(() => {
      actions.setStatus("");
    }, 3000);
  };

  // interface MyFormValues {
  //   name: string;
  //   email: string;
  //   company: string;
  //   title: string;
  //   message: string;
  // }

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
    status,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      company: "",
      title: "",
      message: "",
    },

    validationSchema: yup.object().shape({
      name: yup.string().required("This field is required"),
      email: yup
        .string()
        .required("This field is required")
        .email("Please use a valid email address"),
      company: yup.string().required("This field is required"),
      title: yup.string().required("This field is required"),
      message: yup.string().required("This field is required"),
    }),

    onSubmit,
  });

  return (
    <form
      onSubmit={handleSubmit}
      className="font-semibold text-[15px] leading-[25px] space-y-6 text-primary-white"
    >
      <div>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
          // onBlur={handleBlur}
          className={`${errors.name && touched.name ? "input-error" : ""}`}
        />

        {errors.name && touched.name && typeof errors.name === "string" ? (
          <p className="pl-4 pt-2 italic font-bold text-primary-light-coral text-[12px]">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={values.email}
          onChange={handleChange}
          // onBlur={handleBlur}
          className={`${errors.email && touched.email ? "input-error" : ""}`}
        />

        {errors.email && touched.email && typeof errors.email === "string" ? (
          <p className="pl-4 pt-2 italic font-bold text-primary-light-coral text-[12px]">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <input
          type="text"
          name="company"
          id="company"
          placeholder="Company Name"
          value={values.company}
          onChange={handleChange}
          // onBlur={handleBlur}
          className={`${
            errors.company && touched.company ? "input-error" : ""
          }`}
        />

        {errors.company &&
        touched.company &&
        typeof errors.company === "string" ? (
          <p className="pl-4 pt-2 italic font-bold text-primary-light-coral text-[12px]">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={values.title}
          onChange={handleChange}
          // onBlur={handleBlur}
          className={`${errors.title && touched.title ? "input-error" : ""}`}
        />

        {errors.title && touched.title && typeof errors.title === "string" ? (
          <p className="pl-4 pt-2 italic font-bold text-primary-light-coral text-[12px]">
            {errors.title}
          </p>
        ) : null}
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows={3}
          placeholder="Message"
          value={values.message}
          onChange={handleChange}
          // onBlur={handleBlur}
          className={`${
            errors.message && touched.message ? "input-error" : ""
          }`}
        ></textarea>

        {errors.message &&
        touched.message &&
        typeof errors.message === "string" ? (
          <p className="pl-4 pt-0 italic font-bold text-primary-light-coral text-[12px]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="-mt-3 btn btn-secondary"
      >
        {isSubmitting ? "loading..." : "submit"}
      </button>

      {status && status.success ? (
        <p className="text-primary-light-coral">{status.success}</p>
      ) : null}
    </form>
  );
}

export default ContactForm;
