import React from "react";
import NotesCard from "./NotesCard";

const NotesList = ({ notes, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {notes.map((note) => (
        <NotesCard
          key={note.id}
          title={note.title}
          content={note.content}
          onEdit={() => onEdit(note.id)}
          onDelete={() => onDelete(note.id)}
        />
      ))}
    </div>
  );
};

export default NotesList;
