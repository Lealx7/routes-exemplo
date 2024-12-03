//Importações do Material UI, para estilização da Navbar
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

//Importação do React Router DOM, do componente Link, que pode ser inserido em componentes.
import { Link } from 'react-router-dom';

const Nav2 = () => (
  <AppBar position="static">
    <Toolbar>

      {/*Texto*/}
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        
      </Typography>

      {/*Botões que redirecionam para as rotas*/}
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/about">About</Button>
    </Toolbar>
  </AppBar>
);

export default Nav2;
