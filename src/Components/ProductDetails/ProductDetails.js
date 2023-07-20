import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
        
    const details=useLoaderData();
        console.log(details);

        const bull = (
            <Box
              component="span"
              sx={{
                color: 'success.dark',
                display: 'inline',
                fontWeight: 'bold',
                mx: 0.5,
                fontSize: 14,
              }}
            >
              •
            </Box>
          );

          const card = (
            <React.Fragment>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>
                <Typography variant="h5" component="div">
                {details.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>
                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </React.Fragment>
          );

        
    return (
        <div className='p-100'>
         

         <Button variant="contained">{details.name}</Button>

<Grid container spacing={2}>
  <Grid item  xs={12} sm={12} md={4}>
  <Box sx={{ minWidth: 105 } }>
                <Card variant="outlined">{card}</Card>
                </Box>
  </Grid>


</Grid>
        </div>
    );
};

export default ProductDetails;