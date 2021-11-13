import React from "react";

const Event = ({ meeting, title, time }) => {
  return (
    <div className="Event">
      <p>Class: {meeting}</p>
      <p>Title: {title}</p>
      <p>Time: {time}</p>
    </div>
  );
};

export default Event;
