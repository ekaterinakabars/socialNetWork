import React from "react";
import loading from "../../../assets/images/loading-50.gif";

let Preloader = (props) => {
  return (
    <div>
      <img src={loading} />
    </div>
  );
};

export default Preloader;
