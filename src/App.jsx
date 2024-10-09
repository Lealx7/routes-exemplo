//Arquivos para gerenciar as rotas da aplicação do React-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importação do componente Nav
import Nav from './Nav';

import { Box } from '@mui/material';

{/*Componente Home feito localmente*/ }
const Inicio = () => (
  <Box bgcolor="#f3d1a4" width="100%" height="100vh">
    <h2>Inicio</h2>
    <p>Bem-vindo à página inicial!</p>
  </Box>
);

{/*Componente About feito localmente*/ }
const Sobre = () => (
  <Box bgcolor="#a4d3f5" width="100%" height="100vh">
    <h2>About</h2>
    <p>Esta é a página sobre.</p>
  </Box>
)

{/*Componente About feito localmente*/ }


{/*Componente About feito localmente*/ }
const Categorias = () => (
  <Box bgcolor="#a4d3f5" width="100%" height="100vh">
    <h2> Categorias </h2>
    <p> Tipos</p>
  </Box>
);








{/*Componente App que gerencia as rotas da aplicação*/ }
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/categorias" element={<Categorias />} />
        
        
      </Routes>
    </Router>
  );
};

export default App;
