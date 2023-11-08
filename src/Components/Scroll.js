import React from "react";

const Scroll = (props) => {
  return (
    <div style={{overflowY: 'scroll', border: '5px solid #0A6F82', height: '700px', margin: '10px'}}>
      {props.children}
    </div>
  )
};

export default Scroll;