import React, { useEffect } from "react";
import { CardContent, Card, CardHeader, Avatar, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./CommentsPanel.styles";
import ChatIcon from "@material-ui/icons/Chat";
import { useDispatch, useSelector } from "react-redux";
import { getTrainerCommentsActionCreator } from "../duck/comments.operations";
import { Store } from "../../auth/duck/auth.interfaces";
import { formatDate } from "../../../utils/formatDate";
import PanelTemplate from "../../../templates/PanelTemplate";
import LoadingContainer from "../../../utils/LoadingContainer";

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
      <PanelTemplate>
        <LoadingContainer isFetching={trainerComments.isFetching}>
          <div className={classes.container}>
            {trainerComments.comments !== undefined && !trainerComments.isFetching && (
              <>
                {trainerComments.comments.map(comment => (
                  <Card className={classes.card}>
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
              </>
            )}
          </div>
        </LoadingContainer>
      </PanelTemplate>
    </>
  );
};
export default CommentsPanel;
