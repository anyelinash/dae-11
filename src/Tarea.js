import React, { useState } from 'react';
import { ListItem, ListItemText, Checkbox, Button, TextField, Stack } from '@mui/material';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <ListItem>
      <Checkbox checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <TextField
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            fullWidth
          />
          <Button onClick={handleSaveClick} variant="contained" color="primary">
            Guardar
          </Button>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={2}>
          <ListItemText primary={tarea} />
          <Button onClick={onDelete} variant="contained" color="error">
            Eliminar
          </Button>
          <Button onClick={handleEditClick} variant="contained">
            Editar
          </Button>
        </Stack>
      )}
    </ListItem>
  );
}

export default Tarea;
