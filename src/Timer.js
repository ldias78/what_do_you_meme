import React from "react";
import { useState, useEffect } from "react";

const getTime = () => {
  const time = new Date(deadline) - new Date();

  setTimeDelta({
    minutes: Math.floor((time / 1000 / 60) % 60),
    seconds: Math.floor((time / 1000) % 60),
  });

  render() {
    return (
      <div className="Timer">
        <Card />
        <span className="countdown">{this.state.getTime}</span>
          Shuffle Button
      </div>
    );
  }
};

export default getTime;
