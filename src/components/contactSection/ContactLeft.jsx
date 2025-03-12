import React from "react";
import { ContactForm } from "./ContactForm";

export const ContactLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb-4">Get In Touch</h2>
        <p className="text-white">
          Let's collaborate! Feel free to reach out with any ideas,
          <br />
          questions, or opportunities.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};
