const javaNotes = {
    id: "java",
    title: "Java",
    icon: "💻",
    topics: [
     {
    title: "OOP in Java",
    content: "Encapsulation, Inheritance, Polymorphism (Runtime & Compile-time), Abstraction. Key concepts like classes, objects, interfaces, and abstract classes. Java's single inheritance for classes and multiple inheritance for interfaces.",
    code: `class Vehicle { /* ... */ }\nclass Car extends Vehicle { /* ... */ }`
  },
  {
    title: "Collections Framework",
    content: "Interfaces (List, Set, Map, Queue) and their common implementations (ArrayList, LinkedList, HashSet, HashMap, PriorityQueue). Understanding their use cases, performance characteristics, and common methods.",
    code: `import java.util.ArrayList;\nArrayList<String> list = new ArrayList<>();`
  },
  {
    title: "Multithreading",
    content: "Creating threads (Thread class, Runnable interface). Thread lifecycle. Synchronization (synchronized keyword, Locks, Semaphores). Deadlocks and how to avoid them. Thread pools.",
    code: `class MyRunnable implements Runnable {\n  public void run() { /* ... */ }\n}`
  },
  {
    title: "Exception Handling",
    content: "`try`, `catch`, `finally`, `throw`, `throws` keywords. Checked vs Unchecked exceptions. Custom exceptions. Proper exception handling strategies to make robust applications.",
    code: `try {\n  // risky code\n} catch (Exception e) {\n  // handle exception\n}`
  },
  {
    title: "JVM Architecture",
    content: "Understanding how Java code executes: Class Loader, Memory Areas (Method Area, Heap, Stack, PC Registers, Native Method Stack), Execution Engine (Interpreter, JIT Compiler, Garbage Collector).",
    code: `// Conceptual: JVM handles bytecode execution\n// .java -> .class (bytecode) -> JVM`
  },
  {
    title: "Java 8 Features",
    content: "Lambda Expressions, Functional Interfaces, Stream API, Optional class, Default methods in interfaces, new Date and Time API (java.time).",
    code: `list.stream().filter(s -> s.startsWith("A")).forEach(System.out::println);`
  },
    ],
  };

  export default javaNotes;
