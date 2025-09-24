import React from "react";
import { Link } from "react-router-dom";

function TextLink({ link, children }) {
  return (
    <>
      <Link
        to={link}
        target="_blank"
        style={{
          color: "#888",
          textDecoration: "underline dotted",
          textDecorationColor: "#333",
        }}
      >
        {children}
      </Link>
    </>
  );
}

export default TextLink;
