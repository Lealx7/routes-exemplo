import { useNavigate } from 'react-router-dom';
import { Box, Button, } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    button: {
        margin: '10px',
        backgroundColor: '#1976d2',
        color: '#fff',
        '&:hover': {
            backgroundColor: '#115293',
        },
    },
});

const MapPage = () => {
    const navigate = useNavigate();
    const classes = useStyles();

    const handleRegionClick = (ddd) => {
        navigate(`/region/${ddd}`);
    };

    return (
        <Box bgcolor="white" width={'100%'} height={'100vh'} >

            <Box height={'10%'} display={'flex'} justifyContent={'center'} alignItems={'center'}  color={'white'} bgcolor={'#1976D2'} >
                <h1>Categoria De Livros</h1>
            </Box>
            <Box height={'70%'} display={'flex'} justifyContent={'center'} alignItems={'center'} bgcolor={'white'}>
                <Button className={classes.button} onClick={() => handleRegionClick('Infantil')}>Infantil</Button>
                <Button className={classes.button} onClick={() => handleRegionClick('Romance')}>Romance</Button>
                <Button className={classes.button} onClick={() => handleRegionClick('Poesia')}>Poesia</Button>
                <Button className={classes.button} onClick={() => handleRegionClick('Ficção')}>Ficção</Button>
                <Button className={classes.button} onClick={() => handleRegionClick('Gibis')}>Gibis</Button>
                <Button className={classes.button} onClick={() => handleRegionClick('Enem')}>Enem</Button>
            </Box>

         

        </Box>
    );
};

export default MapPage; 