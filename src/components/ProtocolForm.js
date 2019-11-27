import React from "react";
import { addProtocol } from "../api/protocols";

export default function ProtocolForm() {
  const [itemName, setItemName] = React.useState("");
  const [itemCount, setItemCount] = React.useState("");
  const [itemDueDate, setItemDueDate] = React.useState("");
  const [itemNote, setItemNote] = React.useState("");
  // const emailState = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [protocol, setProtocolOutput] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setErrorMessage("");
    setProtocolOutput("");

    const dateObject = new Date(itemDueDate);
    const dateToday = new Date();
    if (dateObject <= dateToday) {
      console.log("Datum in der Vergangenheit");
      setErrorMessage("Datum in der Vergangenheit");
      return;
    }

    const protocol = {
      itemName: itemName,
      itemCount: itemCount,
      itemDueDate: itemDueDate,
      itemNote: itemNote
    };

    addProtocol(protocol);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Umzugsliste</h1>
      <label>
        Gegenstand
        <input
          type="text"
          required
          value={itemName}
          onChange={event => setItemName(event.target.value)}
        />
      </label>
      <label>
        Anzahl
        <input
          type="number"
          required
          value={itemCount}
          onChange={event => setItemCount(event.target.value)}
        />
      </label>
      <label>
        Vorbereiten bis
        <input
          type="date"
          required
          value={itemDueDate}
          onChange={event => setItemDueDate(event.target.value)}
        />
      </label>
      <label>
        Notiz
        <textarea
          type=""
          cols="30"
          rows="3"
          value={itemNote}
          onChange={event => setItemNote(event.target.value)}
        />
      </label>
      <button type="reset">Reset</button>
      <button>Auf Umzugsliste speichern</button>
      {errorMessage && <div>{errorMessage}</div>}
      <div>Protokoll: {protocol}</div>
    </form>
  );
}
