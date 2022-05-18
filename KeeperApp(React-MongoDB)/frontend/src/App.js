import React, { useState } from 'react';
import axios from "axios";
import Header from './Header';
import Footer from './Footer';
import Note from "./Note";
// import {contents} from "./app1"
// import notes from "./notes";
import CreateArea from "./CreateArea";

function App() {
  // console.log(contents)
    // let contents=[]

  const [notes, updateNotes] = useState([]);
  
  function handleClick(item) {
    const newItem={
      title:item.title,
      content:item.content
    }
    axios.post('https://127.0.0.1:3001/create', newItem)
    updateNotes((prevItems) => {
      return [...prevItems, item]
    })
  }
  function deleteNote(id) {
    updateNotes((prevItems) => {
      return prevItems.filter(
        (item, index) => {
          return index !== id;
        }
      )
    }
    )
  }
  return (
    <div className="App">
      <Header />
      <CreateArea click={handleClick} />
      {notes.map((note, index) =>
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          onCheck={deleteNote}
        />
      )}
      <Footer />
    </div>
  );
}
export default App;
