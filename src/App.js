import React from "react";
import Video from "./Video";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>React YouTube Player</h1>
      <h2 className="h2">Hover over the video to play it !</h2>
      <Video />
    </div>
  );
}
