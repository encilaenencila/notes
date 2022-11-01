import React, { useState } from "react";

function AddNotes({ handleAddNote }) {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const noteHandler = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const onCLickHandler = (e) => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="type to add a note.."
        value={noteText}
        onChange={noteHandler}
      ></textarea>

      <div className="note-footer">
        <small>{characterLimit - noteText.length} Remaining</small>
        <button className="save" onClick={onCLickHandler}>
          Save
        </button>
      </div>
    </div>
  );
}

export default AddNotes;
