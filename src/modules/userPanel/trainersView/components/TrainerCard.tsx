import React, { useContext } from "react";
import useStyles from "./TrainerCard.styles";
import { Card, CardHeader, Avatar, CardContent } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { TrainersPanelContext } from "./TrainersPanel";
import { UserData } from "../../../auth/duck/auth.interfaces";

interface TrainerCardProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedTrainer: React.Dispatch<React.SetStateAction<UserData | undefined>>;
}

const TrainerCard: React.FC<TrainerCardProps> = ({ setBtnMoreDetails, setSelectedTrainer }) => {
  const { mergeFilters } = useContext<TrainersPanelContext>(TrainersPanelContext);

  const classes = useStyles();
  return (
    <>
      {mergeFilters() &&
        mergeFilters().map(trainerData => (
          <Card
            className={classes.card}
            key={trainerData._id}
            onClick={() => {
              setBtnMoreDetails(true);
              setSelectedTrainer(trainerData);
            }}
          >
            <CardHeader
              // avatar={<Avatar>{<AccountCircleIcon />}</Avatar>}
              avatar={
                trainerData.data ? (
                  <img src={trainerData.data.avatar} className={classes.avatarCard} />
                ) : (
                  <Avatar>{<AccountCircleIcon />}</Avatar>
                )
              }
              // action={}
              title={`${trainerData.firstName} ${trainerData.lastName}, ${
                trainerData.data ? trainerData.data.age : "-"
              }`}
              subheader={trainerData.data ? trainerData.data.city : "-"}
              className={classes.cardHeader}
            />
            <CardContent className={classes.cardContent} style={{ paddingBottom: "0" }}>
              <ul className={classes.offerList}>
                {trainerData.offers.map(offer => (
                  <li key={offer._id} className={classes.offerListItem}>
                    {offer.description}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
    </>
  );
};
export default TrainerCard;
