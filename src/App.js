
import { Route, Routes } from 'react-router-dom';
import './App.css';

import RutaPantalla from './conexciones/rutaPantalla';
import { Conecciones } from './conexciones/conecciones';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route exact path="/login" element={<Conecciones/>}>Inicio</Route>
        <Route exact path="*" element={<RutaPantalla/>}>Inicio</Route>
      </Routes>
      
    </div>
  );
}

export default App;
