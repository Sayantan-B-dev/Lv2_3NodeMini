async function ascii() {
  const text = document.getElementById("asciiText").value;
  const out = document.getElementById("asciiOut");

  out.textContent = "⏳ Generating...";

  const res = await fetch("/api/ascii", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text,
      font: "Big", // change later via dropdown
    }),
  });

  const data = await res.json();

  if (data.success) {
    out.textContent = data.art;
  } else {
    out.textContent = data.message;
  }
}


async function joke() {
  const out = document.getElementById("jokeOut");
  out.textContent = "⏳ Loading joke...";

  const res = await fetch("/api/joke");
  const data = await res.json();

  out.textContent = data.success
    ? `🤓 ${data.joke}`
    : data.message;
}

async function language() {
  const text = document.getElementById("langText").value;
  const out = document.getElementById("langOut");

  out.textContent = "⏳ Detecting...";

  const res = await fetch("/api/language", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  });

  const data = await res.json();

  out.textContent = data.success
    ? `🌍 ${data.language} (${data.confidence})`
    : `${data.message}${data.hint ? " — " + data.hint : ""}`;
}
