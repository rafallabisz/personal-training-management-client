import React, { useEffect } from "react";
import { CardContent, Card, CardHeader, Avatar, IconButton, Typography } from "@material-ui/core";
import useStyles from "./CommentsPanel.styles";
import ChatIcon from "@material-ui/icons/Chat";
import { useDispatch, useSelector } from "react-redux";
import { getTrainerCommentsActionCreator } from "../../userPanel/comments/duck/comments.operations";
import { Store } from "../../auth/duck/auth.interfaces";
import { formatDate } from "../../../utils/formatDate";

interface CommentsPanelProps {}

const CommentsPanel: React.FC<CommentsPanelProps> = props => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { user, trainerComments } = useSelector((state: Store) => state);

  useEffect(() => {
    const fetchTrainerComments = () => {
      const trainerId = user.currentUser!._id;
      dispatch(getTrainerCommentsActionCreator(trainerId));
    };
    fetchTrainerComments();
  }, []);

  return (
    <>
      <div className={classes.container}>
        {trainerComments.comments !== undefined ? (
          <>
            {trainerComments.comments.map(comment => (
              <Card className={classes.card}>
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
          </>
        ) : (
          <div>Brak komentarzy</div>
        )}
      </div>
    </>
  );
};
export default CommentsPanel;
