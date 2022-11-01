import React from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";

function Note({ id, text, date, handleDeleteNote }) {
  return (
    <div className="note" key={id}>
      <textarea  defaultValue={text} className="saved-note-text" readOnly>
      </textarea>
      <div className="note-footer">
        <small className="note-date">{date}</small>
        <RiDeleteBin2Fill
          className="delete-icon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
}

export default Note;
