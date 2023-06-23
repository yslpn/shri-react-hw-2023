import React, { useState, useEffect } from "react";

export const Loader = ({ text }: { text: string }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length >= 3) {
          return "";
        } else {
          return prevDots + ".";
        }
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return <div>{text + dots}</div>;
};
