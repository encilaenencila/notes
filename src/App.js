import NotesList from "./components/NotesList";
import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const date = new Date();
  const [notes, setNotes] = useState([
    // {
    //   id: nanoid(),
    //   text: "this is my sample note",
    //   date: date.toLocaleDateString()
    // },
  ]);

  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("nootee")) || [];

    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) localStorage.setItem("nootee", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    localStorage.removeItem("nootee", id);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
