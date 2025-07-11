import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false)
    }, 5000)
    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "start",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          width: "100%",
        }}
      >
        Host Header
        <div
          onClick={() => setShow(!show)}
          style={{
            color: "blue",
            cursor: "pointer",
            backgroundColor: "lightgray",
            padding: "10px",
            borderRadius: "5px",
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
        >
          Toggle Render
        </div>
      </div>
      {show && (
        <micro-app
          name="my-test-app"
          style={{
            width: "100%",
            flex: 1,
            border: "2px solid red",
            boxSizing: "border-box",
          }}
          iframe
          url="http://localhost:3001/"
        ></micro-app>
      )}
    </div>
  );
}

export default App;
