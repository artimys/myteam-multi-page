"use client";

import { useFormik } from "formik";
import * as yup from "yup";

function ContactForm() {
  const onSubmit = () => {
    console.log("submit");
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    isSubmitting,
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
        .email("Please enter a valid email address"),
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
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.name && touched.name ? "input-error" : ""}`}
        />

        {errors.name && touched.name ? (
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
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.email && touched.email ? "input-error" : ""}`}
        />

        {errors.email && touched.email ? (
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
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.company && touched.company ? "input-error" : ""
          }`}
        />

        {errors.company && touched.company ? (
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
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${errors.title && touched.title ? "input-error" : ""}`}
        />

        {errors.title && touched.title ? (
          <p className="pl-4 pt-2 italic font-bold text-primary-light-coral text-[12px]">
            {errors.title}
          </p>
        ) : null}
      </div>

      <div>
        <textarea
          name="message"
          id="message"
          rows="3"
          placeholder="Message"
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${
            errors.message && touched.message ? "input-error" : ""
          }`}
        ></textarea>

        {errors.message && touched.message ? (
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
    </form>
  );
}

export default ContactForm;
