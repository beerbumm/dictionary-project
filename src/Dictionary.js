import React, { useState } from "react";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyWord] = useState("");

  function hadleResponse(response) {}

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(hadleResponse);
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
