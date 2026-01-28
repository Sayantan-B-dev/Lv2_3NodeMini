import { franc } from "franc";
import langs from "langs";

export function detectLanguage(text) {
  if (!text || text.trim().length < 5) {
    throw new Error("✍️ Please enter a longer sentence");
  }

  const code = franc(text, { minLength: 5 });

  if (code === "und") {
    return {
      success: false,
      message: "🤔 Language unclear",
      hint: "Try a full sentence like: This is a beautiful day"
    };
  }

  const language = langs.where("3", code);

  if (!language) {
    return {
      success: false,
      message: "❓ Language not found in database"
    };
  }

  return {
    success: true,
    language: language.name,
    code,
    confidence: "High ✅"
  };
}
