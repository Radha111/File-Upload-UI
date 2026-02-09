const fileInput = document.getElementById("fileInput");
const uploadBox = document.getElementById("uploadBox");
const preview = document.getElementById("preview");

uploadBox.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    preview.innerHTML = "";
    const file = fileInput.files[0];

    if (file && file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    } else if (file) {
        preview.innerHTML = `<p> ${file.name}</p>`;
    }
});

// Drag & Drop
uploadBox.addEventListener("dragover", e => {
    e.preventDefault();
    uploadBox.style.background = "#f0f7ff";
});

uploadBox.addEventListener("dragleave", () => {
    uploadBox.style.background = "";
});

uploadBox.addEventListener("drop", e => {
    e.preventDefault();
    uploadBox.style.background = "";

    const file = e.dataTransfer.files[0];
    preview.innerHTML = "";

    if (file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        preview.appendChild(img);
    } else {
        preview.innerHTML = `<p>📄 ${file.name}</p>`;
    }
});
