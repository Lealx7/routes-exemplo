//Arquivos para gerenciar as rotas da aplicação do React-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importação do componente Nav
import Nav from './Nav';

import { Box } from '@mui/material';
import Linha from './Linha.jsx';
import Input from './Barra.jsx';
import App2 from './App2.jsx';

{/*Componente Home feito localmente*/ }
const Inicio = () => (

  <Box bgcolor="#EBE8E8"
     width="100%"
     height="100%"
     display="flex"
     flexDirection="column" >

      <Linha/>
      <Linha/>
   
      
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
      <App2/>

  </Box>
);

{/*Componente App que gerencia as rotas da aplicação*/ }
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/categorias" element={<Categorias />} />
        
    

      </Routes>
    </Router>
  );
};

export default App;
