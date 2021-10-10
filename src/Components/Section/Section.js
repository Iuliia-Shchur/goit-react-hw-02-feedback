import { Children } from "react";
import s from "./Section.module.css";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}

export default Section;
