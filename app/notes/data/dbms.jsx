const dbmsNotes = {
    id: "dbms",
    title: "DBMS (Database Management Systems)",
    icon: "🗄️",
    topics: [
       {
    title: "SQL Basics",
    content: "DML (SELECT, INSERT, UPDATE, DELETE), DDL (CREATE, ALTER, DROP), DCL (GRANT, REVOKE), TCL (COMMIT, ROLLBACK). Clauses: WHERE, GROUP BY, HAVING, ORDER BY.",
    code: `SELECT column1, COUNT(column2)\nFROM table_name\nWHERE condition\nGROUP BY column1\nHAVING COUNT(column2) > 1;`
  },
  {
    title: "Database Normalization",
    content: "Process of organizing the columns and tables to minimize data redundancy. Forms: 1NF, 2NF, 3NF, BCNF (Boyce-Codd Normal Form). Understanding anomalies (insertion, deletion, update).",
    code: `// 1NF: Atomic values\n// 2NF: No partial dependency\n// 3NF: No transitive dependency\n// BCNF: Every determinant is a candidate key`
  },
  {
    title: "ACID Properties (Transactions)",
    content: "Atomicity (all or nothing), Consistency (valid state), Isolation (independent execution), Durability (permanent changes). Ensures reliable processing of database transactions.",
    code: `BEGIN TRANSACTION;\n  UPDATE Accounts SET Balance = Balance - 100 WHERE ID = 1;\n  UPDATE Accounts SET Balance = Balance + 100 WHERE ID = 2;\nCOMMIT;`
  },
  {
    title: "Joins in SQL",
    content: "INNER JOIN, LEFT (OUTER) JOIN, RIGHT (OUTER) JOIN, FULL (OUTER) JOIN, CROSS JOIN, SELF JOIN. Used to combine rows from two or more tables based on a related column between them.",
    code: `SELECT e.name, d.dept_name\nFROM Employees e\nINNER JOIN Departments d ON e.dept_id = d.id;`
  },
  {
    title: "Indexing",
    content: "Data structure technique used to quickly locate and access data in a database table. Types: Clustered (determines physical order), Non-clustered. B-tree and B+ tree indexing.",
    code: `CREATE INDEX idx_lastname ON Persons (LastName);`
  },
  {
    title: "Concurrency Control",
    content: "Mechanisms to manage simultaneous operations on a database. Techniques include Locking (shared, exclusive), Timestamping, and Optimistic concurrency control. Deals with issues like dirty reads, non-repeatable reads, phantom reads.",
    code: `// Locking Protocol: Two-Phase Locking (2PL)\n// Growing Phase: Acquire locks\n// Shrinking Phase: Release locks`
  },
    ],
  };

  export default dbmsNotes;
