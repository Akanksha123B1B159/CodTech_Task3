const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

// Real-time sync between textarea and preview
editor.addEventListener("input", () => {
  preview.innerText = editor.value;
});

// Simulate collaborator typing every 5 seconds (mock)
setInterval(() => {
  preview.innerText += "\n👩‍💻 Collaborator: Hello from another tab!";
}, 10000);
