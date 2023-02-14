const submitButton=document.querySelector("#new-note-submit");
const textArea=document.querySelector("#new-note-text");
const notes_area=document.querySelector(".notes");
const modal_window=document.querySelector("#modal-background");
const modal_text=document.querySelector(".modal-text");
const close_btn=document.querySelector(".close");

submitButton.addEventListener("click", () => {
    const note_input=textArea.value;
    if(!note_input){
        alert("Type a note");
        return;
    }
    else{
        const new_note=document.createElement("div");
        new_note.classList.add("note");

        const new_note_text=document.createElement("div");
        new_note_text.classList.add("note-text");
        new_note_text.innerHTML=note_input;

        const operations=document.createElement("div");
        operations.classList.add("operations");

        const open=document.createElement("button");
        open.classList.add("open");
        open.innerHTML="Open";

        const del=document.createElement("button");
        del.classList.add("delete");
        del.innerHTML="Delete";

        textArea.value="";

        operations.appendChild(open);
        operations.appendChild(del);
        new_note.appendChild(new_note_text);
        new_note.appendChild(operations);
        notes_area.appendChild(new_note);
        
        del.addEventListener("click", () => {
            notes_area.removeChild(new_note);
        })
    
        open.addEventListener("click", () => {
            modal_text.innerHTML=note_input;
            modal_window.style.display="block";
        })

        close_btn.addEventListener("click", () => {
            modal_window.style.display = "none";
        })
    }
})

window.onclick = function(event) {
    if (event.target == modal_window) {
        modal_window.style.display = "none";
    }
}