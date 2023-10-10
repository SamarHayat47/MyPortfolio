import React from "react";

const Heading = (props) => {
  return (
    <h2 className="text-center font-semibold text-3xl my-5 text-blue-500">
      {props.heading}
    </h2>
  );
};

export default Heading;
