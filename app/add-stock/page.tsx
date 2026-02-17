"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddStock() {
  const router = useRouter();

  const [tireName, setTireName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (!tireName || !quantity) {
      alert("Please fill all fields");
      return;
    }

    alert(`Added ${quantity} units of ${tireName}`);
    setTireName("");
    setQuantity("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Add Stock</h1>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Tire Name"
          value={tireName}
          onChange={(e) => setTireName(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button
          onClick={handleAdd}
          style={{
            padding: "8px 16px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      <button
        onClick={() => router.push("/")}
        style={{
          marginTop: "20px",
          padding: "8px 16px",
          backgroundColor: "gray",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Back Home
      </button>
    </div>
  );
}
