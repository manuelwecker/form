import React from "react";
import ProtocolForm from "./components/ProtocolForm";
import Protocols from "./components/Protocols";

function App() {
  const [showForm, setShowForm] = React.useState(true);
  return (
    <>
      <button onClick={() => setShowForm(!showForm)}>Toggle View</button>
      {showForm && <ProtocolForm />}
      {!showForm && <Protocols />}
    </>
  );
}

export default App;
