import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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

function Catalog() {
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

export { Catalog };
