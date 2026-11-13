```mermaid
flowchart LR
  A[Navegador: public/index.html] -->|fetch GET, POST, DELETE| B[Servidor Express: server.js]
  B -->|JSON| A
  B --> C[(Arreglo tareas en memoria)]
```