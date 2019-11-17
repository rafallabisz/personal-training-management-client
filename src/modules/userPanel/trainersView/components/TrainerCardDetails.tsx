import React, { useContext, useState } from "react";
import useStyles from "./TrainerCardDetails.styles";
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
  Dialog,
  DialogContent,
  Typography,
  DialogTitle,
  DialogActions,
  Grid
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { TrainersPanelContext } from "./TrainersPanel";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

interface TrainerCardDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerCardDetails: React.FC<TrainerCardDetailsProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  const { selectedTrainer } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const [openComments, setOpenComments] = useState<boolean>(false);

  const handleClickOpenComments = () => {
    setOpenComments(true);
  };

  const handleClickCloseComments = () => {
    setOpenComments(false);
  };

  return (
    <>
      {selectedTrainer !== undefined && (
        <Card className={classes.card}>
          <CardHeader
            avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
            // action={}
            title={`${selectedTrainer.firstName} ${selectedTrainer.lastName}, ${
              selectedTrainer.data ? selectedTrainer.data.age : "-"
            }`}
            subheader={selectedTrainer.data ? selectedTrainer.data.city : "-"}
            className={classes.cardHeader}
          />

          <div className={classes.wrapDataTrainer}>
            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>{<PhoneIcon />}</ListItemIcon>
                  <ListItemText primary={selectedTrainer.data ? selectedTrainer.data.phone : "-"} />
                </ListItem>

                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>{<EmailIcon />}</ListItemIcon>
                  <ListItemText primary={selectedTrainer.email} />
                </ListItem>
              </List>
            </CardContent>

            <CardContent className={classes.cardContent}>
              <List className={classes.list}>
                {selectedTrainer.offers.map(offer => (
                  <ListItem key={offer._id}>
                    <ListItemText primary={offer.description} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </div>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnBack}
              startIcon={<ArrowBackIcon />}
              onClick={() => setBtnMoreDetails(false)}
            >
              Back
            </Button>
            <Button
              onClick={() => handleClickOpenComments()}
              variant="contained"
              color="primary"
              size="small"
              className={classes.btnBack}
              startIcon={<OpenInNewIcon />}
            >
              Show comments
            </Button>
          </CardActions>
        </Card>
      )}
      {/* ======================= */}
      <Dialog onClose={handleClickCloseComments} aria-labelledby="customized-dialog-title" open={openComments}>
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
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
};
export default TrainerCardDetails;
