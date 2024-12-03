import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
  0.5: 'Terrivel',
  1: 'Péssimo',
  1.5: 'Muito Ruim',
  2: 'Ruim',
  2.5: 'Mediano',
  3: 'Aceitável',
  3.5: 'Bom',
  4: 'Muito Bom',
  4.5: 'Excelente',
  5: 'Perfeito',
};


function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);



  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center', color: 'black' }}>
       
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
}