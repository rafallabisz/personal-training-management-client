import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface LoadingContainerProps {
  children: React.ReactNode;
  isFetching: boolean;
  pendingTxt?: string;
  errorTxt?: string;
}

const LoadingSpinner: React.FC<LoadingContainerProps> = ({ children, isFetching, pendingTxt, errorTxt }) => {
  const classes = useStyles();
  return (
    <>
      {isFetching && <CircularProgress className={classes.root} color="secondary" />}

      {children}
    </>
  );
};
export default LoadingSpinner;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      top: "50%",
      left: "49%"
    }
  })
);
