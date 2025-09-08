import './App.css'

function App() {
  
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
      </div>
      <div>
        Hello World
      </div>
    </div>
  );
}

export default App
