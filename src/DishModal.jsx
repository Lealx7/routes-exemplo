import React from 'react';
import { Modal, Box, Typography, Button, Rating } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "50%",
  height: "480px",
  borderRadius: 2,
  bgcolor: 'white',
  display: 'flex',
  flexDirection: 'collumn',
  boxShadow: 100,
  p: 6,
};

const DishModal = ({ dish, open, onClose }) => {
  return (
    <Modal  open={open} onClose={onClose}  >
    <Box sx={style}>
<Box
    display="flex" 
    height="100%"
    width="100%" 
    flexDirection="row" 
    justifyContent="space-evelyn" 
    alignItems="center" 
>
    <Box
        display="flex"
        flexDirection="column"
        width="30%" 
    >
        <img
            src={dish.image}
            alt={dish.name}
            style={{ width: '100%', height: 'auto' }}
        />
        <Rating />
    </Box>

    <Box
        display="flex"
        flexDirection="column"
        width="55%" 
        justifyContent="center"
        padding="5%"
    >
        <Typography variant="h6">{dish.name}</Typography>
        <Typography sx={{ mt: 2 }} textAlign="center" width="100%" variant="body1" component="p" margin="0.3rem">
            {dish.description}
        </Typography>
        <Typography sx={{ mt: 2 }} textAlign="center" width="100%" variant="body1" component="p" margin="0.3rem">
            {dish.autor}
        </Typography>

        <Box
            height="10%"
            width="100%"
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
        >
            <a href={dish.recipeLink}>
                <Button
                    sx={{ mt: 2 }}
                    display="flex"
                    flexDirection="column-reverse"
                    width="100%"
                    height="100%"
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUploadIcon />}
                >
                    Baixar Livro
                </Button>
            </a>
        </Box>
    </Box>
</Box>
</Box>




    </Modal >
  );
};

export default DishModal;