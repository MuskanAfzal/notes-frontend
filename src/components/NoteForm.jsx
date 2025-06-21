import React, { useState } from 'react';
import './NoteForm.css';

const NoteForm = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ original: text, category });
    setText('');
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your notes here..."
        required
      ></textarea>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
      </select>
      <button type="submit">Summarize</button>
    </form>
  );
};

export default NoteForm;