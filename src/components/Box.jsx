import React from "react";
import LineGraph from "./LineGraph";
import "./Box.css";

const Box = ({ id }) => {
  return (
    <div className="outer-box">
      <div className="inner-box">
        {id ? (
          <div className="curve-border">
            <LineGraph />
          </div>
        ) : (
          <>
            <div className="blue-box">Only focus on Crime Graph</div>
            <div className="curve-border">
              <div className="blur">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam a nisi vitae quaerat reprehenderit, eos, dolores ut
                  officia incidunt aliquam quo fugiat numquam. Laudantium
                  cumque, est architecto laborum quae nihil!
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Box;
