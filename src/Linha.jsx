import { Box } from '@mui/material'
import Livros from './Livros'


function Linha() {

    return (
        <Box
        display="flex"
        width={'100%'}
        height={'100%'}
        bgcolor={''}
        alignItems="center"
        
        > 
        
          <Livros/>
          <Livros/>
          <Livros/>
          <Livros/>
             
        </Box>

    )
}

export default Linha
