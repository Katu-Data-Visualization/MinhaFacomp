import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
const PORT = 4011;

app.use(cors());
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

app.listen(PORT, () => {
  console.log(`Proxy rodando em http://localhost:${PORT}`);
});
