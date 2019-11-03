import React from "react";
import { CardContent, Card, CardHeader, Avatar, IconButton, Typography } from "@material-ui/core";
import useStyles from "./CommentsPanel.styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatIcon from "@material-ui/icons/Chat";
interface CommentsPanelProps {}

const CommentsPanel: React.FC<CommentsPanelProps> = props => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{<ChatIcon />}</Avatar>}
          action={<span className={classes.rating}>4.7</span>}
          title="Author Undefined"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{<ChatIcon />}</Avatar>}
          action={<span className={classes.rating}>4.7</span>}
          title="Author Undefined"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish h the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar>{<ChatIcon />}</Avatar>}
          action={<span className={classes.rating}>4.7</span>}
          title="Author Undefined"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like. This impressive paella is a perfect party dish and a fun
            meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
export default CommentsPanel;
