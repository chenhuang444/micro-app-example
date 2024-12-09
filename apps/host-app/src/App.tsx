import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MicroApp } from '@micro-zoe/micro-app'

function App() {
  const [count, setCount] = useState(0)

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
      <micro-app
        name="my-test-app"
        style={{
          width: "100%",
          flex: 1,
          border: "2px solid red",
          boxSizing: "border-box",
        }}
        iframe
        url='http://localhost:3001/'
      ></micro-app>
    </div>
  );
}

export default App
