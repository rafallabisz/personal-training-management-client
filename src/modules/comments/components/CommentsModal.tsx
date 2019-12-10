import React, { useState, useEffect } from "react";
import {
  Dialog,
  Grid,
  DialogContent,
  Typography,
  DialogTitle,
  DialogActions,
  CardContent,
  Card,
  Avatar,
  CardHeader
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { formatDate } from "../../../utils/formatDate";
import ChatIcon from "@material-ui/icons/Chat";
import useStyles from "./CommentsModal.styles";
import { CommentsResponse } from "../duck/comments.interfaces";
import api from "../../../services";
import { sortCommentsListByDate } from "../../../utils/sortUtility";

interface CommentsModalProps {
  openComments: boolean;
  handleClickCloseComments: () => void;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ openComments, handleClickCloseComments }) => {
  const classes = useStyles();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [commentsList, setCommentsList] = useState<CommentsResponse[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const trainerId = sessionStorage.getItem("trainerId")!;
      const commentsList = await api.getTrainerComments(trainerId, setIsFetching);
      setCommentsList(commentsList);
    };
    fetchComments();
  }, [openComments]);

  return (
    <>
      <Dialog
        onClose={handleClickCloseComments}
        aria-labelledby="customized-dialog-title"
        open={openComments}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          style: {
            backgroundColor: "#dee4f1"
          }
        }}
      >
        <Grid container>
          <Grid item xs={11}>
            <DialogTitle id="customized-dialog-title">Comments</DialogTitle>
          </Grid>
          <Grid item xs={1}>
            <DialogActions>
              <IconButton aria-label="close" onClick={handleClickCloseComments}>
                <CloseIcon />
              </IconButton>
            </DialogActions>
          </Grid>
        </Grid>
        <DialogContent dividers>
          <Typography gutterBottom>
            {sortCommentsListByDate(commentsList).map((comment: CommentsResponse, i) => (
              <Card key={i} className={classes.dialogCard}>
                <CardHeader
                  avatar={
                    comment.avatar ? (
                      <img src={comment.avatar} className={classes.avatarComments} />
                    ) : (
                      <Avatar>{<ChatIcon />}</Avatar>
                    )
                  }
                  action={<Rating name="read-only" value={comment.rating} readOnly precision={0.5} />}
                  title={comment.author}
                  subheader={formatDate(comment.createdAt)}
                  className={classes.cardHeader}
                />
                <CardContent className={classes.cardContent}>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {comment.content}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default CommentsModal;
