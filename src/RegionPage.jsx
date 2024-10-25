import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Modal, Button } from '@mui/material';
import DishModal from './DishModal';
import dishesData from './dishes.json'



const RegionPage = () => {
  const { ddd } = useParams();
  const [selectedDish, setSelectedDish] = useState(null);
  const [dishes, setDishes] = useState({});

  useEffect(() => {
    setDishes(dishesData)
  })

  const handleDishClick = (dish) => {
    setSelectedDish(dish);
  };

  const handleCloseModal = () => {
    setSelectedDish(null);
  };

  return (
    <div>
      <h1>Livros Da Categoria:  {ddd}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {dishes[ddd]?.map((dish, index) => (
          <Card key={index} onClick={() => handleDishClick(dish)} style={{ margin: 10, cursor: 'pointer', border: '0.5px solid black' }}>
            <CardMedia component="img" max-width="15%" max-height="80%" image={dish.image} alt={dish.name} />
            <CardContent>
              <Typography variant="h6">{dish.name} </Typography>
            </CardContent>


          </Card>
        ))}
      </div>
      {selectedDish && (
        <DishModal dish={selectedDish} open={Boolean(selectedDish)} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RegionPage;