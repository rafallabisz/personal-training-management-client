import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  CardActions,
  Button,
  TextField
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./TrainerDetails.styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Rating from "@material-ui/lab/Rating";

interface TrainerDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerDetails: React.FC<TrainerDetailsProps> = ({ setBtnMoreDetails }) => {
  const [valueRating, setValueRating] = useState<number>(5);
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
            // action={}
            title="Rafal Labisz, 22"
            subheader="Wroclaw"
            className={classes.cardHeader}
          />

          <div className={classes.wrapDataTrainer}>
            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
                  <ListItemText primary={"500500500"} />
                </ListItem>

                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
                  <ListItemText primary={"rafal@gmail.com"} />
                </ListItem>
              </List>
            </CardContent>

            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                <ListItem>
                  <ListItemText primary={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, aliquid?"} />
                </ListItem>

                <ListItem>
                  <ListItemText
                    primary={"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, repellendus."}
                  />
                </ListItem>
              </List>
            </CardContent>
          </div>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnBack}
              startIcon={<MoreVertIcon />}
              onClick={() => setBtnMoreDetails(false)}
            >
              Back
            </Button>
          </CardActions>
        </Card>

        <Card className={classes.card}>
          <CardActions>
            <div>
              <div>
                <TextField
                  id="filled-search"
                  label="Author"
                  type="search"
                  className={classes.textFieldAuthor}
                  margin="normal"
                />
                {/* <Button variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>
              Add comment
            </Button> */}
                <Rating
                  name="simple-controlled"
                  value={valueRating}
                  precision={0.5}
                  onChange={(event: any, newValue: number) => {
                    setValueRating(newValue);
                  }}
                />
              </div>
              <TextField
                id="standard-multiline-static"
                label="Comment"
                multiline
                rows="3"
                className={classes.textField}
                margin="normal"
              />
            </div>
          </CardActions>
        </Card>
      </div>
    </>
  );
};
export default TrainerDetails;
