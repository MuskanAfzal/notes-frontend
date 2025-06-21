import React from 'react';
import './NoteList.css';

const NoteList = ({ notes, onDelete }) => (
  <div className="note-list">
    {notes.map(note => (
      <div key={note._id} className="note-item">
        <p><strong>Original:</strong> {note.original}</p>
        <p><strong>Summary:</strong> {note.summary}</p>
        <p><strong>Category:</strong> {note.category}</p>
        <button onClick={() => onDelete(note._id)}>Delete</button>
      </div>
    ))}
  </div>
);

export default NoteList;