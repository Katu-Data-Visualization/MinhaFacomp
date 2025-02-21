import express from "express";
import cors from "cors";
import axios from "axios";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 4011;

// Habilitar CORS para o preview do Vite (porta 4173)
app.use(
  cors({
    origin: ["http://localhost:4173"], // Permite requisições do preview do Vite
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());

// Rota para processar o POST no backend e ocultar a API
app.post("/api/minhafacomp", async (req, res) => {
  try {
    const response = await axios.post(
      "https://katudv.com/api/minhafacomp/submit",
      req.body
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar requisição" });
  }
});

app.get("/api/minhafacomp", async (req, res) => {
  try {
    const response = await axios.get("https://katudv.com/api/minhafacomp/");
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

// 🚀 Só servir a pasta "dist" em produção, para evitar loop
if (process.env.NODE_ENV === "production") {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  app.use(express.static(path.join(__dirname, "dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
