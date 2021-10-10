import s from "./Section.module.css";
import PropTypes from "prop-types";

function Section({ title, children }) {
  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <div className={s.sectionWrapper}>{children}</div>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;
