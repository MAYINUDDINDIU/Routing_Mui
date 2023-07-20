import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Card, CardActions, CardContent, Grid, TextField, Typography } from '@mui/material';
const Product = ({ pro }) => {
    const { name, username, email, id } = pro;

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
                    {name}
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
            <CardActions >
            <TextField
  hiddenLabel
  id="filled-hidden-label-small"
  value={username}
  variant="filled"
  size="small"
/>
            <Button color="success"  variant="contained"><Link  to={`/product/${id}`}>{username}</Link></Button>
            </CardActions>
        </React.Fragment>
    );




    return (
        <div>



            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4}>
                    <Box sx={{ minWidth: 105, m:1 }}>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </Grid>
                <Grid item  xs={12} sm={12} md={4}>
                    <Box   sx={{ minWidth: 105, m:1 }}>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <Box sx={{ minWidth: 105, m:1 }}>
                        <Card variant="outlined">{card}</Card>
                    </Box>
                </Grid>
            </Grid>
     
        </div>
    );
};

export default Product;