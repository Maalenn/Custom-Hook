import { useEffect } from "react";
import useToggle from "./useToggle";

const App = () => {
  const [show, toggle] = useToggle(true);

  return (
    <div>
      {show ? <Message /> : null}
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

function Message() {
  useEffect(() => {
    const clearId = setInterval(() => console.log("useEffect"), 1000);
    return () => clearInterval(clearId);
  }, []);
  return <h2>Message</h2>;
}

export default App;
