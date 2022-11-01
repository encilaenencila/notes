import React from "react";
import Note from "./Note";
import AddNotes from "./AddNotes";
function NotesList({ notes, handleAddNote, handleDeleteNote }) {
  return (
    <div className="notes-list">
         <AddNotes handleAddNote={handleAddNote} />
   
      {notes.map((note) => (
        <Note
        key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}

    </div>
  );
}

export default NotesList;
