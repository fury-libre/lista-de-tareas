const express = require("express");
const app = express();
app.use(express.json());
app.use(express.static("public"));
let tareas = [{ id: 1, texto: "Aprender Node" }];

app.get("/tareas", (req, res) => {
  res.json(tareas);
});

app.post("/tareas", (req, res) => {
  const nueva = { id: Date.now(), texto: req.body.texto };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

app.listen(3000, () => console.log("Servidor en http://localhost:3000"));

app.delete("/tareas/:id", (req, res) => {
  // 1. saca el id de req.params.id y conviértelo en número
  // 2. deja en `tareas` solo las que NO tengan ese id (filter)
  // 3. responde con res.status(204).end()
  const id = parseInt(req.params.id);
  tareas = tareas.filter(tarea => tarea.id !== id);
  res.status(204).end();
});
