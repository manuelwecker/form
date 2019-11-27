import React from "react";
import Protocol from "./Protocol";
import { getProtocols } from "../api/protocols";

export default function Protocols() {
  const protocols = getProtocols();

  return (
    <div>
      {protocols.map(protocol => (
        <Protocol
          key={`${protocol.itemName}.${protocol.itemCount}`}
          {...protocol}
        />
      ))}
    </div>
  );
}
