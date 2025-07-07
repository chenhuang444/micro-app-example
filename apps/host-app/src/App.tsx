import './App.css'

function App() {
  const fileProtocolPath = `file://${MICROAPP_PATH}/dist/index.html`

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
        wordBreak: "break-all",
      }}
    >
      <div
        style={{
          fontSize: "42px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>Host Header</div>
        <div>{fileProtocolPath}</div>
      </div>
      {/* @ts-expect-error - micro-app is a valid tag after initialization */}
      <micro-app
        name="my-test-app"
        style={{
          width: "100%",
          flex: 1,
          border: "2px solid red",
          boxSizing: "border-box",
        }}
        // iframe
        url={fileProtocolPath}
        // @ts-expect-error - micro-app is a valid tag after initialization
      ></micro-app>
    </div>
  );
}

export default App
