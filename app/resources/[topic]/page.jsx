import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const topics = {
  java: [
    { title: "OOP Principles", content: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
    { title: "JVM vs JRE vs JDK", content: "JVM: Runs bytecode\nJRE: Runtime Environment\nJDK: Dev Kit with JRE + tools" },
  ],
  react: [
    { title: "Hooks", content: "useState, useEffect, useRef, useContext..." },
    { title: "Virtual DOM", content: "Efficient re-rendering using diffing algorithm" },
  ]
};

export default function TopicPage({ params }) {
  const { topic } = params;
  const data = topics[topic] || [];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold capitalize">{topic} Revision</h2>
      <Accordion type="single" collapsible className="w-full">
        {data.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
