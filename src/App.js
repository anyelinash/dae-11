import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';
import {
  Container,
  Typography,
  Card,
  CardContent,
  ButtonGroup,
  Button
} from '@mui/material';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("Todas");

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false, fechaCreacion: new Date() }]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareas = (orden) => {
    const tareasOrdenadas = [...tareas].sort((a, b) => {
      if (orden === 'asc') {
        return new Date(a.fechaCreacion) - new Date(b.fechaCreacion);
      } else {
        return new Date(b.fechaCreacion) - new Date(a.fechaCreacion);
      }
    });
    setTareas(tareasOrdenadas);
  };

  let tareasFiltradas = tareas;
  if (filtro === "Pendientes") {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === "Completadas") {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <Container maxWidth="md" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Lista de Tareas
          </Typography>
          <TareaForm agregarTarea={agregarTarea} />
          <Filtros filtrarTareas={filtrarTareas} />
          <ButtonGroup fullWidth style={{ marginTop: '10px' }}>
            <Button onClick={() => ordenarTareas('asc')}>Ascendente</Button>
            <Button onClick={() => ordenarTareas('desc')}>Descendente</Button>
          </ButtonGroup>
          <ListaTareas
            tareas={tareasFiltradas}
            eliminarTarea={eliminarTarea}
            editarTarea={editarTarea}
            toggleCompletada={toggleCompletada}
          />
        </CardContent>
      </Card>
    </Container>
  );
}

export default App;
          