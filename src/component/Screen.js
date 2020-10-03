import React from "react";
import "./style/Screen.css";

const Screen = ({ input }) => {
  return (
    <div >
      <br />
      <div className="input">
        <div className="screen">
          {input}
        </div>
      </div>
    </div>
  );
};
export default Screen;
