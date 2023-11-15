import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function TareaForm({ agregarTarea }) {
  const [texto, setTexto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;
    agregarTarea(texto);
    setTexto("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        label="Añadir tarea..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        fullWidth
        required
      />
      <Button type="submit" variant="contained" sx={{ backgroundColor: '#ff9800', color: 'white' }}>
        Agregar Tarea
      </Button>
    </form>
  );
}

export default TareaForm;
