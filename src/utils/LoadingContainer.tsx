import React, { useState, SyntheticEvent, useEffect } from "react";
import { CircularProgress, Snackbar } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface LoadingContainerProps {
  children: React.ReactNode;
  isFetching: boolean;
  errorTxt?: string;
}

const LoadingSpinner: React.FC<LoadingContainerProps> = ({ children, isFetching, errorTxt }) => {
  const classes = useStyles();

  const [openAlert, setOpenAlert] = useState<boolean>(true);

  const handleCloseAlert = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      setOpenAlert(false);
    }
  };

  return (
    <>
      {isFetching && <CircularProgress className={classes.root} color="secondary" />}
      {errorTxt && (
        <Snackbar
          className={classes.alert}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={openAlert}
          onClose={handleCloseAlert}
          message={errorTxt}
          ContentProps={{
            style: { backgroundColor: "#d32f2f" }
          }}
        />
      )}
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
    },
    alert: {
      position: "absolute",
      top: "50%",
      left: "50%"
    }
  })
);
