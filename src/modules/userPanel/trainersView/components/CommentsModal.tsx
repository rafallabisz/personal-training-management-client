import React, { useContext } from "react";
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
import { formatDate } from "../../../../utils/formatDate";
import ChatIcon from "@material-ui/icons/Chat";
import { TrainersPanelContext } from "./TrainersPanel";
import useStyles from "./CommentsModal.styles";

interface CommentsModalProps {
  openComments: boolean;
  handleClickCloseComments: () => void;
}

const CommentsModal: React.FC<CommentsModalProps> = ({ openComments, handleClickCloseComments }) => {
  const classes = useStyles();
  const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);

  return (
    <>
      {selectedTrainer !== undefined && (
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
              {selectedTrainer.comments.map(comment => (
                <Card className={classes.dialogCard}>
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
      )}
    </>
  );
};
export default CommentsModal;
