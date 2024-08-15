import React from "react";
import  ContactInfo  from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { ContactMap } from "./ContactMap";
import { ContactReviews } from "./ContactReviews";

export const Contacts = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <div className="contact-hero__wrapper">
            <ContactInfo />
            <ContactMap />
          </div>
          <div className="contact-hero__wrapper">
            <ContactForm />
            <ContactReviews />
          </div>
        </div>
      </div>
    </section>
  );
};
