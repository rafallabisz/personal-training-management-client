import React, { useState } from "react";
import { Card, CardActions, Grid, Typography, TextField, Button } from "@material-ui/core";
import useStyles from "./FormAddComment.styles";
import Rating from "@material-ui/lab/Rating";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { AddComment } from "../duck/comments.interfaces";
import { useDispatch, useSelector } from "react-redux";
import { addCommentActionCreator } from "../duck/comments.operations";
import { Store } from "../../auth/duck/auth.interfaces";
import AlertMessage from "../../../utils/AlertMessage";
import LoadingContainer from "../../../utils/LoadingContainer";

interface FormAddCommentProps {}

const FormAddComment: React.FC<FormAddCommentProps> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state: Store) => state.trainerComments);
  const { currentUser } = useSelector((state: Store) => state.user);
  const [valueRating, setValueRating] = useState<number>(5);

  const initCommentsForm = {
    author: "",
    content: "",
    rating: 5,
    avatar: currentUser!.data && currentUser!.data.avatar ? currentUser!.data.avatar : ""
  };

  const [commentsForm, setCommentsForm] = useState<AddComment>(initCommentsForm);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setCommentsForm({
      ...commentsForm,
      [name]: value,
      rating: valueRating
    });
  };

  const handleAddComment = () => {
    const trainerId = sessionStorage.getItem("trainerId");
    dispatch(addCommentActionCreator(trainerId, commentsForm));
    setTimeout(() => {
      setCommentsForm(initCommentsForm);
      setValueRating(5);
    }, 2100);
  };

  return (
    <LoadingContainer isFetching={isFetching}>
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
              name="author"
              className={classes.textFieldAuthor}
              margin="normal"
              onChange={handleChange}
              value={commentsForm.author}
            />
            <TextField
              id="standard-multiline-static"
              label="Comment"
              name="content"
              multiline
              rows="3"
              className={classes.textField}
              margin="normal"
              onChange={handleChange}
              value={commentsForm.content}
            />
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => handleAddComment()}
              startIcon={<AddCircleIcon />}
            >
              Add comment
            </Button>
          </Grid>
        </CardActions>
        <AlertMessage
          isFetching={isFetching}
          error={!commentsForm.author || !commentsForm.content ? "err" : undefined}
          errorTxt="Fill in the empty fields!"
        >
          Comment has been added successfully!
        </AlertMessage>
      </Card>
    </LoadingContainer>
  );
};
export default FormAddComment;
