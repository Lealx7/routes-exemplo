import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "60%",
  height: "80%",
  borderRadius: 2,
  bgcolor: 'white',
  boxShadow: 24,
  p: 4,
};

const DishModal = ({ dish, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box bgcolor={'b'} sx={style}>
        <Typography variant="h6" component="h2"  >
          {dish.name}
        </Typography>
        <Typography sx={{ mt: 2 }} textaling="center">
          {dish.description}
        </Typography>
        <Button href={dish.recipeLink} target="_blank" sx={{ mt: 2 }} >
          Seu Livro
        </Button>
      </Box>
    </Modal>
  );
};

export default DishModal;