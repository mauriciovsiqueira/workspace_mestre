# 🚀 Workspace Mestre Universal (Firebase Studio)

Este é um template de alta performance para o **Google Project IDX - Firebase Studio**, configurado para ser a base de qualquer projeto web, desde sites estáticos simples até sistemas robustos com APIs e banco de dados.  
Use e adapte para você.

## 🛠️ O que já vem pronto?
* **Ambiente:** Node.js 22 + Nodemon (Auto-restart).
* **Servidor:** Express.js pré-configurado para arquivos estáticos e APIs.
* **Automação:** Instalação de dependências automática ao criar o workspace.
* **Otimização:** Configurado para rodar de forma leve em máquinas com **8GB de RAM**.

---

## 📂 Estrutura de Pastas
* `.idx/dev.nix`: Configurações da máquina virtual e extensões.
* `index.js`: O "cérebro" do servidor. Gerencia as rotas e os arquivos.
* `index.html`: Sua interface principal (Frontend).
* `package.json`: Scripts e bibliotecas do projeto.

---

## 🚀 Como usar para diferentes projetos

### 1. Sites Simples (HTML/CSS/JS)
Basta editar o arquivo `index.html`. O servidor já está configurado para entregar qualquer arquivo que você colocar na raiz. O Preview atualizará automaticamente ao salvar.

### 2. Sistemas Robustos (Backend/API)
Use o `index.js` para criar suas rotas. 
> **Exemplo:** Para criar uma API de usuários, adicione `app.get('/api/usuarios', ...)` no seu arquivo de servidor.

---

## ⌨️ Comandos Principais
| Comando | Função |
| :--- | :--- |
| `npm run dev` | Inicia o servidor com monitoramento de alterações. |
| `npm install` | Instala manualmente novas bibliotecas. |
| `git add .` | Prepara as alterações para o GitHub. |  

Para os comandos do Github, tenho em outro repositório com o "manual de sobrevivência do github".

---

## 💡 Dicas de Performance
* Mantenha o terminal limpo; use o **Code Runner** para testes rápidos de lógica.
* O servidor utiliza o **Express**, que é extremamente econômico.
* Evite abrir muitas abas de Preview simultaneamente.

---

## ⚙️ Configurações da IDE (settings.json)
Para manter o editor formatado e leve, utilize estas configurações no seu VS Code/IDX:  
Atalho: crtl + shift + p   
Na caixa de pesquisa: open user settings (JSON)

```json
{
  "http.proxySupport": "off",
  "terminal.integrated.localEchoLatencyThreshold": -1,
  "terminal.integrated.localEchoEnabled": "off",
  "terminal.integrated.fontSize": 13,
  "workbench.startupEditor": "none",
  "editor.fontFamily": "JetBrains Mono, Menlo, Monaco, Courier New, monospace",
  "editor.fontWeight": "normal",
  "editor.fontSize": 13,
  "editor.lineHeight": 1.5,
  "editor.letterSpacing": 0,
  "debug.console.fontSize": 13,
  "window.commandCenter": false,
  "workbench.preferredDarkColorTheme": "Google Dark",
  "workbench.preferredLightColorTheme": "Google Light",
  "workbench.iconTheme": "monospace",
  "window.autoDetectColorScheme": true,
  "workbench.layoutControl.enabled": false,
  "inlineChat.mode": "preview",
  "files.autoSave": "onFocusChange",
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "json.schemas": []
}
