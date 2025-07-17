import React, { useState } from "react";

export default function SelectorChecker() {
  const [selectors, setSelectors] = useState("");
  const [results, setResults] = useState<string[]>([]);

  function checkSelectors() {
    const lines = selectors.split("\n").map(s => s.trim()).filter(Boolean);
    setResults(lines.map(sel => {
      try {
        document.createDocumentFragment().querySelector(sel);
        return `✅ "${sel}" is valid`;
      } catch {
        return `❌ "${sel}" is NOT valid`;
      }
    }));
  }

  return (
    <div style={{
      background: "#fff", borderRadius: "8px", boxShadow: "0 2px 8px #1976d233",
      padding: "32px", maxWidth: "480px", margin: "32px auto"
    }}>
      <h2>CSS Selector Checker</h2>
      <textarea rows={6} style={{ width: "100%" }}
        placeholder="Enter selectors, one per line"
        value={selectors}
        onChange={e => setSelectors(e.target.value)}
      />
      <button onClick={checkSelectors}>Check Selectors</button>
      <ul>
        {results.map((r, i) => <li key={i}>{r}</li>)}
      </ul>
    </div>
  );
}
