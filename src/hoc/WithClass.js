import React from "react";

const withClass = (props) => {
  return <div className={props.withClass}>{props.children}</div>;
};

export default withClass;
