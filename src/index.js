import React from "react";
import ReactDOM from "react-dom";
import Login from "./login";

function App(props) {
  return (
    <div style={{ flexGrow: 1 }}>
      <Login />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
