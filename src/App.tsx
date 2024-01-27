import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';

import { INote } from './store/notes/notesSlice';
import Note from './components/Note';
import CreateNote from './components/CreateNote'
import type { RootState } from './store';


function App() {
  const notes = useSelector((state: RootState) => state.notes.list);

  return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="Wrapper">
          <CreateNote/>
          {
            notes.map((note: INote) => {
              return (
                  <Note
                      key={new Date(note.timestamp).getTime()}
                      note={note}
                  />
              )
            })
          }
        </div>
      </div>
  );
}

export default App;
