import React from "react";
import useStyles from "./TrainerDetails.styles";
import FormAddComment from "./FormAddComment";
import TrainerCardDetails from "./TrainerCardDetails";

interface TrainerDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const TrainerDetails: React.FC<TrainerDetailsProps> = ({ setBtnMoreDetails }) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <TrainerCardDetails setBtnMoreDetails={setBtnMoreDetails} />
        <FormAddComment />
      </div>
    </>
  );
};
export default TrainerDetails;
