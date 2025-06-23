'use client';
import { notesData } from './data';
import Link from 'next/link';

export default function NotesHome() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-800 mb-4 tracking-tight">
          Quick Revision
        </h1>
        <p className="text-xl text-gray-600 font-light">
          Brush up your concepts before the interview
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {notesData.map(note => (
          <Link href={`/notes/${note.id}`} key={note.id} className="block"> {/* Assuming note.id for dynamic routing */}
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer border border-transparent hover:border-blue-300">
              <div className="text-5xl mb-4 text-blue-600">
                {note.icon}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">
                {note.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
