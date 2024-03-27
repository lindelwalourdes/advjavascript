const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

// Load notes from session storage when the page loads
window.addEventListener("load", () => {
    const savedNotes = JSON.parse(sessionStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => {
        createNoteElement(noteText);
    });
});

createBtn.addEventListener("click", () => {
    // Prompt the user for input
    const inputText = prompt("Enter your note:");

    if (inputText) {
        // Save note to session storage
        const savedNotes = JSON.parse(sessionStorage.getItem("notes")) || [];
        savedNotes.push(inputText);
        sessionStorage.setItem("notes", JSON.stringify(savedNotes));

        // Create note element
        createNoteElement(inputText);
    }
});

function createNoteElement(text) {
    // Create a new note container
    let noteContainer = document.createElement("div");
    noteContainer.className = "input-box";

    // Creating a new paragraph for text input
    let inputBox = document.createElement("p");
    inputBox.textContent = text;

    // Creating a delete button
    let deleteBtn = document.createElement("img");
    deleteBtn.src = "delete.png";
    deleteBtn.alt = "Delete";
    deleteBtn.addEventListener("click", () => {
        // Removing the entire note when the delete button is clicked
        notesContainer.removeChild(noteContainer);

        // Removing the note from session storage
        const savedNotes = JSON.parse(sessionStorage.getItem("notes")) || [];
        const index = savedNotes.indexOf(text);
        if (index !== -1) {
            savedNotes.splice(index, 1);
            sessionStorage.setItem("notes", JSON.stringify(savedNotes));
        }
    });

    // Appending elements to the note container
    noteContainer.appendChild(inputBox);
    noteContainer.appendChild(deleteBtn);

    // Appending the note container to the notes container
    notesContainer.appendChild(noteContainer);
}
