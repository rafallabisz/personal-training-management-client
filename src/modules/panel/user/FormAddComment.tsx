import React, { useState } from "react";
import { Card, CardActions, Grid, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./FormAddComment.styles";
import Rating from "@material-ui/lab/Rating";
import AddCircleIcon from "@material-ui/icons/AddCircle";

interface FormAddCommentProps {}

const FormAddComment: React.FC<FormAddCommentProps> = props => {
  const classes = useStyles();
  const [valueRating, setValueRating] = useState<number>(5);
  return (
    <Card className={classes.card}>
      <CardActions>
        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
          <Typography>Your rating</Typography>
          <Rating
            name="simple-controlled"
            value={valueRating}
            precision={0.5}
            onChange={(event: React.ChangeEvent<{}>, newValue: number) => {
              setValueRating(newValue);
            }}
          />
          <TextField
            id="filled-search"
            label="Author"
            type="search"
            className={classes.textFieldAuthor}
            margin="normal"
          />
          <TextField
            id="standard-multiline-static"
            label="Comment"
            multiline
            rows="3"
            className={classes.textField}
            margin="normal"
          />
          <Button variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>
            Add comment
          </Button>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default FormAddComment;
