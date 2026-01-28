import figlet from "figlet";

export function generateAscii(text, font = "Big") {
  return new Promise((resolve, reject) => {
    if (!text || text.trim().length === 0) {
      return reject("⚠️ Please enter some text");
    }

    figlet.text(
      text,
      {
        font,              // Better font
        horizontalLayout: "default",
        verticalLayout: "default",
        width: 120,        // Prevent ugly wrapping
        whitespaceBreak: true,
      },
      (err, data) => {
        if (err || !data) {
          reject("❌ ASCII generation failed");
        } else {
          resolve({
            art: data,
            font,
            length: text.length,
          });
        }
      }
    );
  });
}
