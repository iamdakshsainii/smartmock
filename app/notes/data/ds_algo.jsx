// src/notes/ds_algo.js
const dsAlgoNotes = {
    id: "ds_algo",
    title: "Data Structures & Algorithms",
    icon: "🔢",
    topics: [
      {
        title: "Arrays",
        content: "Storing data in a linear collection...",
        code: `int[] arr = {1, 2, 3, 4};`,
      },
      {
        title: "Linked List",
        content: "Data structures where elements are linked using pointers...",
      },
      {
        title: "Sorting Algorithms",
        content: "Bubble Sort, Merge Sort, Quick Sort...",
      },
      {
        title: "Stacks",
        content: "A stack is a linear data structure that follows Last In First Out (LIFO) principle...",
        code: `
        class Stack {
          constructor() {
            this.stack = [];
          }
          push(value) {
            this.stack.push(value);
          }
          pop() {
            return this.stack.pop();
          }
        }`,
      },
      {
        title: "Queues",
        content: "A queue is a linear data structure that follows First In First Out (FIFO) principle...",
        code: `
        class Queue {
          constructor() {
            this.queue = [];
          }
          enqueue(value) {
            this.queue.push(value);
          }
          dequeue() {
            return this.queue.shift();
          }
        }`,
      },
      {
        title: "Binary Search Tree",
        content: "A binary tree where each node has at most two children, and the left child is less than the parent node...",
        code: `
        class Node {
          constructor(value) {
            this.value = value;
            this.left = null;
            this.right = null;
          }
        }
        function insert(root, value) {
          if (!root) {
            return new Node(value);
          }
          if (value < root.value) {
            root.left = insert(root.left, value);
          } else {
            root.right = insert(root.right, value);
          }
          return root;
        }`,
      },
    ],
  };
export default dsAlgoNotes;
