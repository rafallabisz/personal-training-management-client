import React, { useContext } from "react";
import useStyles from "./TrainerCard.styles";
import { Card, CardHeader, Avatar, CardContent } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Rating from "@material-ui/lab/Rating";
import { TrainersPanelContext } from "./TrainersPanel";
import { UserData } from "../../auth/duck/auth.interfaces";

interface TrainerCardProps {}

const TrainerCard: React.FC<TrainerCardProps> = () => {
  const { mergeFilters } = useContext<TrainersPanelContext>(TrainersPanelContext);
  const classes = useStyles();

  const countOverallRating = (trainerData: UserData) => {
    const ratingTotal = trainerData.comments.reduce((prev, current) => prev + current.rating, 0);
    const numberOfComments = trainerData.comments.length;
    const averageRating = ratingTotal / numberOfComments;
    return averageRating;
  };

  const variationWordOpinions = (trainerData: UserData) => {
    const numberOfComments = trainerData.comments.length;
    if (numberOfComments === 1) return "opinion";
    return "opinions";
  };

  return (
    <>
      {mergeFilters() &&
        mergeFilters().map(trainerData => (
          <Card
            className={classes.card}
            key={trainerData._id}
            onClick={() => {
              sessionStorage.setItem("trainerId", trainerData._id);
            }}
          >
            <CardHeader
              avatar={
                trainerData.data.avatar ? (
                  <img src={trainerData.data.avatar} className={classes.avatarCard} />
                ) : (
                  <Avatar>{<AccountCircleIcon />}</Avatar>
                )
              }
              action={
                <div style={{ display: "flex", flexDirection: "column", textAlign: "right" }}>
                  <Rating
                    name="read-only"
                    value={countOverallRating(trainerData)}
                    readOnly
                    precision={0.25}
                    size="small"
                  />
                  <span>{`(${trainerData.comments.length} ${variationWordOpinions(trainerData)})`}</span>
                </div>
              }
              title={`${trainerData.firstName} ${trainerData.lastName}, ${
                trainerData.data.age ? trainerData.data.age : "-"
              }`}
              subheader={trainerData.data.city ? trainerData.data.city : "-"}
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
