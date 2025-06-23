import { notesData } from "../data";
import { notFound } from 'next/navigation';

export default function TopicPage({ params }) {
  const note = notesData.find(n => n.id === params.noteId);

  if (!note) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{note.title} Notes</h1>
      {note.topics.map((topic, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mb-1">{topic.title}</h2>
          <p className="text-gray-700 mb-2">{topic.content}</p>
          {topic.code && (
            <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
              <code>{topic.code}</code>
            </pre>
          )}
        </div>
      ))}

      <div className="mt-10 text-sm text-gray-600">
        Can’t find what you're looking for?{" "}
        <a
          href="mailto:smartmock.help@gmail.com"
          className="text-blue-600 underline"
        >
          Request a topic
        </a>
      </div>
    </div>
  );
}
