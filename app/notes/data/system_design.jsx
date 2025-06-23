// src/notes/systemdesign.jsx
 const systemDesignNotes = {
    id: "system_design",
    title: "System Design",
    icon: "💡",
    topics: [
      {
    title: "Scalability",
    content: "Vertical Scaling (scaling up) vs Horizontal Scaling (scaling out). Load Balancers (Layer 4, Layer 7). Auto-scaling. Database scaling (read replicas, sharding/partitioning).",
    code: `// Horizontal Scaling: add more servers\n// Vertical Scaling: add more resources to one server`
  },
  {
    title: "Availability & Reliability",
    content: "High Availability (HA): Redundancy, Failover mechanisms. Disaster Recovery (RTO, RPO). Fault Tolerance vs High Availability. Mean Time Between Failures (MTBF), Mean Time To Recover (MTTR).",
    code: `// Active-Passive vs Active-Active HA setups`
  },
  {
    title: "Load Balancing",
    content: "Distributing network traffic across multiple servers. Algorithms: Round Robin, Least Connections, IP Hash. Benefits: improved performance, increased availability.",
    code: `// NGINX, HAProxy are common load balancers`
  },
  {
    title: "Databases",
    content: "SQL vs NoSQL (Relational vs Non-Relational). When to use which. ACID vs BASE properties. Sharding/Partitioning techniques (Horizontal, Vertical, Directory-based). Replication (Master-Slave, Multi-Master).",
    code: `// SQL: PostgreSQL, MySQL\n// NoSQL: MongoDB, Cassandra, Redis`
  },
  {
    title: "Caching",
    content: "Strategies: Cache-aside, Write-through, Write-back. Cache eviction policies (LRU, LFU, FIFO). CDN (Content Delivery Network). Types of caching: client-side, server-side, database caching.",
    code: `// Redis, Memcached are popular caching solutions`
  },
  {
    title: "Message Queues",
    content: "Decoupling components, asynchronous communication. Publishers, Subscribers, Brokers. Benefits: reliability, scalability, fault tolerance. Examples: Kafka, RabbitMQ, SQS.",
    code: `// Publisher sends message -> Queue -> Subscriber consumes message`
  },
  {
    title: "API Design",
    content: "RESTful principles (Stateless, Client-Server, Cacheable, Layered System). HTTP Methods (GET, POST, PUT, DELETE). Idempotence. Versioning APIs. GraphQL vs REST.",
    code: `// GET /users/{id}\n// POST /users`
  },
  {
    title: "Distributed Systems Challenges",
    content: "CAP Theorem (Consistency, Availability, Partition Tolerance). Data consistency models (Strong, Eventual). Two-Phase Commit. Clock synchronization.",
    code: `// CAP Theorem: Choose 2 of 3 in a distributed system`
  },
    ],
  };
export default systemDesignNotes;
