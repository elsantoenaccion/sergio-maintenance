export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#ffffff",
      color: "#111111",
      padding: "2rem",
      textAlign: "center",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ maxWidth: "720px" }}>
        <p style={{
          fontSize: "0.85rem",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#666",
          marginBottom: "1.5rem"
      <p style={{
  fontSize: "1rem",
  fontWeight: 700,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#555",
  marginBottom: "1.5rem"
}}>
  Sergio Ruiz Trejo
</p>
        }}>
          Sergio Ruiz Trejo
        </p>
        <h1 style={{
          fontSize: "3rem",
          lineHeight: 1.1,
          marginBottom: "1.5rem"
        }}>
          Sitio en reconstrucción
        </h1>
        <p style={{
          fontSize: "1.1rem",
          lineHeight: 1.8,
          color: "#444"
        }}>
          Estoy desarrollando una nueva plataforma que articula mi trabajo artístico,
          curatorial y de investigación en torno al sonido, el territorio y la cultura.
        </p>
      </div>
    </main>
  );
}
