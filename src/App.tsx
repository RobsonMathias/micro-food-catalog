import React from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    padding: "1rem",
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function CatalogApp() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://picsum.photos/200/300"
            title="Random Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Random Image
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa
              arma uma pindureta. Suco de cevadiss deixa as pessoas mais
              interessantis.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth={true} variant={"outlined"} color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CatalogApp;
