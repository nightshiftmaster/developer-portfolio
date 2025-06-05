import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MoonLoader from "react-spinners/MoonLoader";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { IoMdAlert } from "react-icons/io";

const SignupSchema = Yup.object().shape({
  from_name: Yup.string().required("Name is a required field"),
  from_email: Yup.string()
    .email("Enter valid email ")
    .required("Email is a required field")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Enter valid email !"
    ),
  message: Yup.string().required("Message is a required field"),
});

export const ContactForm = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  return (
    <div>
      <Formik
        initialValues={{
          from_name: "",
          from_email: "",
          message: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { resetForm }) => {
          emailjs
            .sendForm(
              import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              form.current,
              {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
              }
            )
            .then(
              () => {
                console.log("SUCCESS!");
                setSuccess(true);
                resetForm();
              },
              (error) => {
                if (values.from_name.length === 0) {
                  console.log("error");
                }
                console.log("FAILED...", error.text);
              }
            );
        }}
      >
        {({ errors, touched, isSubmitting }) => {
          return (
            <Form className="flex flex-col gap-4 text-white my-5" ref={form}>
              <Field
                name="from_name"
                type="text"
                placeholder="Your Name"
                className={`h-12 rounded-lg bg-lightbrown px-2  ${
                  errors.from_name && touched.from_name
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_name && touched.from_name ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_name}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              <Field
                name="from_email"
                placeholder="Your Mail"
                className={`h-12 rounded-lg bg-lightbrown px-2 ${
                  errors.from_email && touched.from_email
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.from_email && touched.from_email ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.from_email}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              <Field
                name="message"
                as="textarea"
                type="text"
                placeholder="Message"
                rows="9"
                cols="50"
                className={`rounded-lg bg-lightbrown p-2 ${
                  errors.message && touched.message
                    ? "outline-red-500 outline"
                    : "outline-blue-500"
                }`}
              />
              {errors.message && touched.message ? (
                <div className="text-red-500 flex flex-row gap-1 items-stretch">
                  {errors.message}
                  <IoMdAlert size={20} />
                </div>
              ) : null}
              <button
                disabled={isSubmitting}
                type="submit"
                className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:scale-105 transition-all duration-500 hover:bg-cyan ${
                  isSubmitting ? "bg-gray-500" : "bg-darkcyan"
                }`}
              >
                {!isSubmitting ? "Submit" : "Sending..."}
              </button>
              <MoonLoader
                className="absolute -top-10 left-8 transform -translate-x-1/2 -translate-y-1/2"
                loading={isSubmitting}
                color="white"
                size={25}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </Form>
          );
        }}
      </Formik>
      <h2 className="text-xl text-white font-light text-center">
        {success ? "Your message has been sent successfully!" : ""}
      </h2>
    </div>
  );
};
