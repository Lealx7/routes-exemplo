//Importações do Material UI, para estilização da Navbar
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

//Importação do React Router DOM, do componente Link, que pode ser inserido em componentes.
import { Link } from 'react-router-dom';
import Input from './Barra';
import './MainPage.css';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import InstallMobileOutlinedIcon from '@mui/icons-material/InstallMobileOutlined';
const Nav = () => (
  <AppBar position="relative"  >
    <Toolbar >
     

      <InstallMobileOutlinedIcon/>
      {/*Texto*/}
      <Typography variant="h6" style={{ flexGrow: 1 }}>
       <Button color="inherit" component={Link} to="/">Livraria Digital</Button> 
      </Typography>

      {/*Botões que redirecionam para as rotas*/}
      <Typography variant="h6" style={{ flexGrow: 19,  justifyContent: 'center' }}>
      <header className="header">
                <h1>Bem-vindos à Livraria Digital</h1>
            </header>
       
      </Typography>
     
      <Button color="inherit" component={Link} to="/">Inicio</Button>
     <Button color="inherit" component={Link} to="/categorias/">Categorias</Button>
     

      
      
        


    </Toolbar>
  </AppBar>
);

export default Nav;



