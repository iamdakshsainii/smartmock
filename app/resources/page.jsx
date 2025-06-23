// app/resources/page.jsx
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { BookOpenCheck, Code2, CodeSquare } from "lucide-react";

const topics = [
  { name: "Java", slug: "java", icon: <Code2 /> },
  { name: "React", slug: "react", icon: <CodeSquare /> },
  { name: "System Design", slug: "system-design", icon: <BookOpenCheck /> }
];

export default function ResourcesPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Quick Revision</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map(topic => (
          <Link href={`/resources/${topic.slug}`} key={topic.slug}>
            <Card className="p-4 hover:shadow-lg transition rounded-2xl cursor-pointer">
              <div className="flex items-center gap-4">
                {topic.icon}
                <span className="text-xl font-semibold">{topic.name}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
