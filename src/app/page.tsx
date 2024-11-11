'use client';
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import 'bootstrap/dist/css/bootstrap.min.css';

// Define types for the note structure
interface Note {
    id: number;
    title: string;
    description: string;
    important: boolean;
}

interface NoteListProps {
    notes: Note[];
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
    onDelete: (id: number) => void;
}

const IndexPage: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([
        {
            id: 1,
            title: 'Meeting',
            description: 'Review project, assign task',
            important: false,
        },
        {
            id: 2,
            title: 'Grocery',
            description: 'Milk, Sugar, Apples, eggs',
            important: false,
        },
    ]);

    const deleteNote = (id: number) => {
        setNotes(notes.filter((note) => note.id !== id));
    };

    return (
        <div className="container col-md-9 mb-3 mt-5 bg-light border border-dark">
            <div className="col text-center">
                <h2 className="text-success mt-3">
                    Sumanth Kumar Moturi
                </h2>
                <h4>Note Taking App</h4>
            </div>
            <NoteList notes={notes} setNotes={setNotes} onDelete={deleteNote} />
        </div>
    );
};

export default IndexPage;
