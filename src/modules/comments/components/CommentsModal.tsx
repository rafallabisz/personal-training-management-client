import React, { useContext, useState, useEffect } from "react";
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
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { formatDate } from "../../../utils/formatDate";
import ChatIcon from "@material-ui/icons/Chat";
import { TrainersPanelContext } from "../../trainers/components/TrainersPanel";
import useStyles from "./CommentsModal.styles";
import axios from "axios";
import { CommentsResponse } from "../duck/comments.interfaces";
import LoadingContainer from "../../../utils/LoadingContainer";
import { UserData } from "../../auth/duck/auth.interfaces";

interface CommentsModalProps {
  openComments: boolean;
  handleClickCloseComments: () => void;
  selectedTrainer?: UserData;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ openComments, handleClickCloseComments, selectedTrainer }) => {
  const classes = useStyles();
  // const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);

  useEffect(() => {
    const fetchComments = async () => {
      // const selectedTrainerId = selectedTrainer!._id;
      const selectedTrainerId = sessionStorage.getItem("trainerId");
      setIsFetching(true);
      const response = await axios.get<CommentsResponse[]>(
        `http://localhost:5000/trainer/${selectedTrainerId}/comments`
      );
      setCommentsList(response.data);
      setIsFetching(false);
      fetchComments();
    };
  }, [openComments]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [commentsList, setCommentsList] = useState<CommentsResponse[]>([]);

  return (
    <>
      <LoadingContainer isFetching={isFetching}>
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
              {commentsList.map((comment: CommentsResponse, i) => (
                <Card key={i} className={classes.dialogCard}>
                  <CardHeader
                    avatar={<Avatar>{<ChatIcon />}</Avatar>}
                    action={<span className={classes.rating}>{comment.rating}</span>}
                    title={comment.author}
                    subheader={formatDate(comment.createdAt)}
                  />
                  <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {comment.content}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Typography>
          </DialogContent>
        </Dialog>
      </LoadingContainer>
    </>
  );
};
export default CommentsModal;
