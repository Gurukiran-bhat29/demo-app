import React from "react";

export default function Buttons({ count }) {
  let buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button key={i}>
        button {i}
      </button>
    )
  }
  return (
    <div>
      {buttons}
    </div>
  )
}