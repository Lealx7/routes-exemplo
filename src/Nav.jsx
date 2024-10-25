//Importações do Material UI, para estilização da Navbar
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

//Importação do React Router DOM, do componente Link, que pode ser inserido em componentes.
import { Link } from 'react-router-dom';
import Input from './Barra';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
const Nav = () => (
  <AppBar position="relative"  >
    <Toolbar >
      <MenuBookOutlinedIcon/>
      {/*Texto*/}
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        Livraria Publica
      </Typography>

      {/*Botões que redirecionam para as rotas*/}
      
      <Input/>
      <Button color="inherit" component={Link} to="/inicio">Inicio</Button>
      <Button color="inherit" component={Link} to="/categorias">Categorias</Button>
      <Button color="inherit" component={Link} to="/about">Sobre</Button>
      
        


    </Toolbar>
  </AppBar>
);

export default Nav;



