import express from "express";
import { generateAscii } from "./services/asciiArt.js";
import { getJoke } from "./services/jokes.js";
import { detectLanguage } from "./services/language.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

/* ASCII */
app.post("/api/ascii", async (req, res) => {
  try {
    const { text, font } = req.body;
    const result = await generateAscii(text, font || "Big");
    res.json({ success: true, ...result });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

/* Joke */
app.get("/api/joke", async (req, res) => {
  try {
    const result = await getJoke();
    res.json({ success: true, ...result });
  } catch (err) {
    res.json({ success: false, message: err });
  }
});

/* Language */
app.post("/api/language", (req, res) => {
  try {
    const result = detectLanguage(req.body.text);
    res.json(result);
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
