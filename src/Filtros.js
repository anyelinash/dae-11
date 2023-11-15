import React from 'react';

function Filtros({ filtrarTareas }) {
  const buttonStyle = {
    margin: '5px',
    padding: '8px 16px',
    borderRadius: '5px',
    backgroundColor: '#008080',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div>
      <button onClick={() => filtrarTareas("Todas")} style={buttonStyle}>
        Todas
      </button>
      <button onClick={() => filtrarTareas("Pendientes")} style={buttonStyle}>
        Pendientes
      </button>
      <button onClick={() => filtrarTareas("Completadas")} style={buttonStyle}>
        Completadas
      </button>
    </div>
  );
}

export default Filtros;
