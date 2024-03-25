import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import initialNotes from "../notes";
import NoteAddForm from "./NoteAddForm";

function App() {
  let key = 5;
  const [notes, setNotes] = useState(initialNotes);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, { ...newNote, key: key++ }];
    });
  }

  function deleteNote(key) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.key !== key);
    });
  }

  function createNotes(notes) {
    return notes.map((note) => (
      <Note
        key={note.key}
        id={note.key}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
      />
    ));
  }
  return (
    <div className="App">
      <Header />
      <NoteAddForm onAdd={addNote} />
      {createNotes(notes)}
      <Footer />
    </div>
  );
}
export default App;
