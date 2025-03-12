import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MoonLoader from "react-spinners/MoonLoader";

export const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [value, setValue] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
          setValue({ ...value, from_name: "", from_email: "", message: "" });
          setLoading(false);
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div>
      <form
        className="flex flex-col gap-4 text-white my-5"
        action=""
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          value={value.from_name}
          onChange={(e) => setValue({ ...value, from_name: e.target.value })}
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightbrown px-2"
        />
        <input
          name="from_email"
          value={value.from_email}
          onChange={(e) => setValue({ ...value, from_email: e.target.value })}
          type="email"
          placeholder="Your Mail"
          className="h-12 rounded-lg bg-lightbrown px-2"
          required
        />
        <textarea
          name="message"
          value={value.message}
          onChange={(e) => setValue({ ...value, message: e.target.message })}
          type="text"
          placeholder="Message"
          rows="9"
          cols="50"
          className="rounded-lg bg-lightbrown px-2"
          required
        ></textarea>
        <button
          disabled={loading}
          type="submit"
          className={`w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-cyan ${
            loading ? "bg-gray-500" : "bg-darkcyan"
          }`}
        >
          {!loading ? "Submit" : "Sending..."}
        </button>
        <MoonLoader
          className="absolute -top-10 left-8 transform -translate-x-1/2 -translate-y-1/2"
          loading={loading}
          color="white"
          size={25}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </form>
      <h2 className="text-xl text-white font-light text-center">
        {success ? "Your message has been sent successfully!" : ""}
      </h2>
    </div>
  );
};
