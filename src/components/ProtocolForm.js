import React from "react";

export default function ProtocolForm() {
  return (
    <form>
      <h1>Umzugsliste</h1>
      <label>
        Gegenstand
        <input type="text" />
      </label>
      <label>
        Anzahl
        <input type="number" />
      </label>
      <label>
        Vorbereiten bis
        <input type="date" />
      </label>
      <label>
        Notiz
        <textarea type="" cols="30" rows="3" />
      </label>
      <button>Auf Umzugsliste speichern</button>
    </form>
  );
}
