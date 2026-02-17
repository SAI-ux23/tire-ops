"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const pageStyle: React.CSSProperties = {
    padding: "40px",
    fontFamily: "Arial",
  };

  const buttonStyle: React.CSSProperties = {
    display: "block",
    margin: "10px 0",
    padding: "15px",
    fontSize: "16px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: "220px",
    textAlign: "left",
  };

  return (
    <main style={pageStyle}>
      <h1>ZEHLEPHA Tire OPS</h1>
      <h2>Tire Inventory Management System</h2>

      <div style={{ marginTop: "30px" }}>
        <button style={buttonStyle} onClick={() => router.push("/add-stock")}>
          Add Stock
        </button>

        <button style={buttonStyle} onClick={() => router.push("/record-sale")}>
          Record Sale
        </button>

        <button style={buttonStyle} onClick={() => router.push("/view-inventory")}>
          View Inventory
        </button>
      </div>
    </main>
  );
}
