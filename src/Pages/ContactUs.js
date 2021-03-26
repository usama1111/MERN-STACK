import React, { useState, useEffect } from "react";
import "./ContactUs.css";

const Contact = () => {


  return (
    <form className="form" >
      <h1>Contact Us 🤳</h1>

      <input
        placeholder="Name"
      />

      <input
        placeholder="Email"
      />
      <textarea
        placeholder="Message"
      ></textarea>

      <button
        type="submit"
        style={{ background:" rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Contact;