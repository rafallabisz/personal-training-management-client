import React from "react";
import useStyles from "./TrainerDetails.styles";
import FormAddComment from "./FormAddComment";
import TrainerCardDetails from "./TrainerCardDetails";
import { UserData } from "../../auth/duck/auth.interfaces";

interface TrainerDetailsProps {
  setBtnMoreDetails: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTrainer: UserData | undefined;
}

const TrainerDetails: React.FC<TrainerDetailsProps> = ({
  setBtnMoreDetails,
  selectedTrainer
}) => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.container}>
        <TrainerCardDetails
          setBtnMoreDetails={setBtnMoreDetails}
          selectedTrainer={selectedTrainer}
        />
        <FormAddComment />
      </div>
    </>
  );
};
export default TrainerDetails;
