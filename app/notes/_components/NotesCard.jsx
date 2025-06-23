// components/ui/NotesCard.jsx
import React from "react";

const NotesCard = ({ title, content, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-56 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* This div uses flex-grow to take up available space, pushing buttons to bottom */}
      <div className="flex-grow overflow-hidden">
        <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
        {/* line-clamp-3 ensures text truncates, maintaining height */}
        <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
          {content}
        </p>
      </div>

      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={onEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-md transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
