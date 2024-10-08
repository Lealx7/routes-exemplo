//Arquivos para gerenciar as rotas da aplicação do React-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Importação do componente Nav
import Nav from './Nav';

import {Box} from '@mui/material';

{/*Componente Home feito localmente*/}
const Home = () => (
    <Box bgcolor="#f3d1a4" width="100%" height="100vh">
      <h2>Home</h2>
      <p>Bem-vindo à página inicial!</p>
    </Box>
);

{/*Componente About feito localmente*/}
const About = () => (
    <Box bgcolor="#a4d3f5" width="100%" height="100vh">
      <h2>About</h2>
      <p>Esta é a página sobre.</p>
    </Box>
);



{/*Componente App que gerencia as rotas da aplicação*/}
const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
