import { useState } from "react";

const Toggle = (initalValue) => {
  const [show, setShow] = useState(initalValue);
  const toggle = () => {
    setShow(!show);
  };
  return [show, toggle];
};

export default Toggle;
