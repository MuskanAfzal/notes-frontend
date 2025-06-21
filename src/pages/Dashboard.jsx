import React, { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import './Dashboard.css';
import BASE_URL from '../config';

const Dashboard = () => {
  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/notes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      const data = await res.json();
      setNotes(data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
    }
  };

  const handleSummarize = async ({ original, category }) => {
    try {
      const res = await fetch(`${BASE_URL}/api/notes/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ original, category })
      });
      const data = await res.json();
      if (res.ok) {
        setNotes([data, ...notes]);
      } else {
        alert(data.error || 'Failed to summarize');
      }
    } catch (err) {
      console.error('Summarization failed:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/api/notes/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      });
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      console.error('Failed to delete note:', err);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div className="dashboard">
      <h2>Summarize Your Notes</h2>
      <NoteForm onSubmit={handleSummarize} />
      <NoteList notes={notes} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
