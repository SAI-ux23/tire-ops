export default function Home() {
  const buttonStyle = {
    display: "block",
    margin: "10px 0",
    padding: "15px",
    fontSize: "16px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  };

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ZEHLEPHA Tire OPS</h1>
      <h2>Tire Inventory Management System</h2>

      <div style={{ marginTop: "30px" }}>
        <button style={buttonStyle}>Add Stock</button>
        <button style={buttonStyle}>Record Sale</button>
        <button style={buttonStyle}>View Inventory</button>
      </div>
    </main>
  );
}
