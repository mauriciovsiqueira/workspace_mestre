const express = require("express");
const path = require("path");
const app = express();

// 1. Suporte para receber dados (JSON/Formulários) - Essencial para Sistemas
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Servidor de arquivos estáticos - Se você criar arquivos na raiz, eles aparecem no Preview
app.use(express.static(__dirname));

// 3. Rota de teste para confirmar que o sistema está online
app.get("/api/health", (req, res) => {
  res.json({
    status: "Online",
    message: "Workspace pronto para qualquer projeto.",
  });
});

// 4. Porta dinâmica para o Firebase Studio
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 SERVIDOR ATIVO`);
  console.log(`👉 Porta: ${PORT}`);
  console.log(`📂 Pronto para receber seus arquivos .html, .js ou .css\n`);
});
