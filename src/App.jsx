//Arquivos para gerenciar as rotas da aplicação do React-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import MapPage from './MapPage';
import RegionPage from './RegionPage';

//Importação do componente Nav
import Nav from './Nav';

import { Box } from '@mui/material';

//Finalizado

function App() {
  return (
    <Router>
     <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/categorias" element={<MapPage />} />
        <Route path="/region/:ddd" element={<RegionPage />} />
      
      </Routes>
      
      <Box
                width={'100%'}
                height={''}
            >
                <img src="https://i.ibb.co/XX2SSk2/Patrocinadores.png" alt="" width={'100%'} height={'100%'} />
            </Box>
    </Router>
      
    
  );
}

export default App;
