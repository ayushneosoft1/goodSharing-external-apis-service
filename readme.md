## This is external-apis service.

Language is **simple**, **Node.js server focused**, and **self-explanatory**.

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import gql from "graphql-tag";

---

# 📌 Why above imports are used (Core Understanding)

This project uses **Apollo GraphQL** to create a **Node.js server** with minimum code.
Below is an explanation of each important import so that any trainee developer can easily understand **what is happening and why**.

---

## 1️⃣ `ApolloServer`

```js
import { ApolloServer } from "@apollo/server";
```

### What is `ApolloServer`?

`ApolloServer` is the **main GraphQL engine** of our **Node.js server**.

### Why is it required?

- It allows the Node.js server to **understand GraphQL**
- It stores:

  - All APIs (Queries & Mutations)
  - Their logic (resolvers)

- It decides:

  - Which API to run
  - What response to send back

### In simple words

> Without `ApolloServer`, our Node.js server cannot work as a GraphQL server.

---

## 2️⃣ `startStandaloneServer`

```js
import { startStandaloneServer } from "@apollo/server/standalone";
```

### What is `startStandaloneServer`?

`startStandaloneServer` is a **helper function** that starts a Node.js server with **minimum setup**.

### Why is it required?

Normally, starting a Node.js server needs:

- HTTP server creation
- Port binding
- Request handling

`startStandaloneServer` does all of this **internally**, so we don’t have to write extra code.

### What it does internally

- Creates an HTTP Node.js server
- Starts listening on a given port
- Connects incoming requests to `ApolloServer`

### In simple words

> It starts the Node.js server and makes it listen on a port.

---

## 3️⃣ `gql`

```js
import gql from "graphql-tag";
```

### What is `gql`?

`gql` is used to write **GraphQL schema** inside JavaScript safely.

### Why is it required?

GraphQL schema is written in **GraphQL language**, not JavaScript.

Example GraphQL schema:

```graphql
type Query {
  hello: String
}
```

JavaScript cannot understand this directly, so we wrap it using `gql`.

### What `gql` does

- Reads GraphQL schema text
- Parses it
- Converts it into a format Apollo Server understands

### In simple words

> `gql` acts as a translator between GraphQL and JavaScript.

---

## 4️⃣ Quick Summary Table

| Import                  | Purpose                                     |
| ----------------------- | ------------------------------------------- |
| `ApolloServer`          | Creates GraphQL-enabled Node.js server      |
| `startStandaloneServer` | Starts Node.js server and listens on a port |
| `gql`                   | Parses GraphQL schema inside JavaScript     |

---

## 5️⃣ Easy Analogy (For Beginners)

- **ApolloServer** → Brain of the Node.js server
- **startStandaloneServer** → Starts the server and opens the port
- **gql** → Translator for GraphQL language

---

This setup keeps the project:

- Easy to understand
- Minimal
- Beginner friendly

---
