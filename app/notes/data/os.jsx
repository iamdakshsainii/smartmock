// src/notes/os.jsx
 const osNotes = {
    id: "os",
    title: "Operating Systems",
    icon: "💾",
    topics: [
     {
    title: "Process Management",
    content: "Process vs Program. Process States (New, Ready, Running, Waiting, Terminated). Process Control Block (PCB). Context Switching. Threads vs Processes.",
    code: `// ps -aux (Linux command to list processes)\n// fork() (System call to create a new process)`
  },
  {
    title: "CPU Scheduling",
    content: "Algorithms: FCFS (First-Come, First-Served), SJF (Shortest Job First), Priority Scheduling, Round Robin. Understanding preemption, turnaround time, waiting time, and throughput.",
    code: `// RR Scheduling: Time Quantum (e.g., 20ms)`
  },
  {
    title: "Process Synchronization",
    content: "Critical Section Problem. Solutions: Mutex Locks, Semaphores (Counting, Binary), Monitors. Problems: Producer-Consumer, Readers-Writers, Dining Philosophers. Race conditions.",
    code: `// Semaphore usage:\n// wait(S) / P(S) (decrement)\n// signal(S) / V(S) (increment)`
  },
  {
    title: "Deadlocks",
    content: "Conditions for Deadlock (Mutual Exclusion, Hold and Wait, No Preemption, Circular Wait). Methods: Prevention, Avoidance (Banker's Algorithm), Detection, Recovery.",
    code: `// Banker's Algorithm: checks if safe state exists`
  },
  {
    title: "Memory Management",
    content: "Techniques: Paging, Segmentation, Swapping. Virtual Memory. Demand Paging. Page Replacement Algorithms (FIFO, LRU, Optimal). Thrashing.",
    code: `// Virtual Address -> (Page Number, Offset)\n// Page Table maps Page Number to Frame Number`
  },
  {
    title: "File Systems",
    content: "File concepts (attributes, operations, types). Directory structure (single-level, two-level, tree-structured). File allocation methods (contiguous, linked, indexed). Free space management.",
    code: `// mkdir (create directory)\n// rm (remove file/directory)`
  },
    ],
  };
export default osNotes;
