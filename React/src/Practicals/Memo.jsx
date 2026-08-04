import React, { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const square = useMemo(() => {
    console.log("Calculating...");
    return count * count;
  }, [count]);

  return (
    <div>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default Memo;