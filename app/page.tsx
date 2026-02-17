export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>ZEHLEPHA Tire OPS</h1>
      <h2>ระบบจัดการสต๊อกล้อยาง</h2>

      <div style={{ marginTop: "30px" }}>
        <button style={btnStyle}>📦 เพิ่มสินค้าเข้า</button>
        <button style={btnStyle}>🛒 บันทึกการขาย</button>
        <button style={btnStyle}>📊 ดูสต๊อกคงเหลือ</button>
      </div>
    </main>
  );
}

const btnStyle = {
  display: "block",
  margin: "10px 0",
  padding: "15px",
  fontSize: "18px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};}
