import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert("Searching");
  }

  function handleKeywordChange() {}

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
