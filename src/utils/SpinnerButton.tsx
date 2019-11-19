import React from "react";
import { Button, CircularProgress, makeStyles, Theme, createStyles } from "@material-ui/core";

interface SpinnerButtonProps {
  children: React.ReactNode;
  isFetching: boolean;
}

const SpinnerButton: React.FC<SpinnerButtonProps> = ({ children, isFetching }) => {
  const classes = useStyles();
  return (
    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
      {isFetching && (
        <span className={classes.spinner}>
          <CircularProgress color="secondary" size={20} />
        </span>
      )}
      {children}
    </Button>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spinner: {
      position: "absolute",
      display: "flex",
      marginLeft: "-45px"
    },
    submit: {
      margin: theme.spacing(2, 0, 2)
    }
  })
);

export default SpinnerButton;
