import React, {} from "react";

const Message = ({ message, bgColor }) => {

  let styles = {
    padding: "1rem",
    marginBotton: "1rem",
    textAlign: "center",
    color: "#FFF",
    fontWeigth: "bold",
    backgroundColor: bgColor
  }

  return (
    <div style={ styles }>
      {/* <p>{ message }</p> */}
      <p dangerouslySetInnerHTML={{__html:message}} />
    </div>
  );
}

export default Message;
