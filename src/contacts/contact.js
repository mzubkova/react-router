import React from "react";

const Contact = (props) => (
  <div>
    <div className="contact">
      <h4>
        {props.firstName} {props.lastName}
      </h4>
      <p>
        {props.phone} {props.gender}
      </p>
    </div>
  </div>
);

export default Contact;
