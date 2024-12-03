import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, Modal, Button } from '@mui/material';
import DishModal from './DishModal';
import dishesData from './dishes.json'
import './MainPage.css';



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
      <section className="intro">
        <p className="cta">{ddd}</p>
        {dishes[ddd]?.about && (
          <Typography variant="body1" style={{ marginBottom: '20px' }}>
            {dishes[ddd].about}
          </Typography>
        )}
        {dishes[ddd]?.books?.map((dish, index) => (
          <Typography key={index} variant="h6"></Typography>
        ))}
      </section>
      <div className="cards-container" style={{ display: 'flex', justifyItems: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {dishes[ddd]?.books?.map((dish, index) => (
          <Card key={index} onClick={() => handleDishClick(dish)} style={{ width: '20%', margin: 10, cursor: 'pointer', border: '0.5px solid black' }}>
            <CardMedia component="img" maxWidth="15%" maxHeight="80%" image={dish.image} alt={dish.name} />
            <CardContent>
              <Typography variant="h6">{dish.name}</Typography>
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





