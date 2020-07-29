import React from "react";

const withClass = (WrapperComponent, className) => {
  return (props) => (
    <div className={className}>
      <WrapperComponent></WrapperComponent>
    </div>
  );
};

export default withClass;
