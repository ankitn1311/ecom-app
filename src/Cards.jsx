import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography, Button, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        maxWidth: 345,

    },
    media: {
        height: 400,
    },

}));


const Cards = () => {

    const classes = useStyles();


    return (
        <>
            <Grid item xs={12} lg={4}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image="/images/coat.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Coat
                      </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                $2000
                      </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Add to cart
                        </Button>
                        <Link to="/products/123" size="small" color="primary">
                            <Button size="small" color="primary">
                                Details
                            </Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Cards;