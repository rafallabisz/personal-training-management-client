import React, { useState, useEffect } from "react";
import { Alert } from "reactstrap";
import useDidMount from "../hooks/useDidMount";
import iconSuccess from "../assets/img/check-circle-solid.svg";
import iconError from "../assets/img/error-circle-solid.svg";
import { makeStyles, DefaultTheme } from "@material-ui/styles";

interface AlertMessageProps {
  isFetching: boolean;
  error?: string;
  errorTxt?: string;
  children: React.ReactNode;
}

const AlertMessage: React.FC<AlertMessageProps> = ({ isFetching, error, errorTxt, children }) => {
  const propsStyles = { backgroundColor: error ? "#D32F2F" : "#68c16c" };
  const classes = useStylesAlert(propsStyles);
  const [visibleAlert, setVisibleAlert] = useState<boolean>(false);

  const isMount = useDidMount();
  useEffect(() => {
    if (isMount && !isFetching) {
      setVisibleAlert(true);
      setTimeout(() => {
        setVisibleAlert(false);
      }, 2000);
    }
  }, [isFetching]);

  return (
    <>
      {visibleAlert && (
        <div className={classes.wrapAlert}>
          <img
            src={error ? iconError : iconSuccess}
            width="15px"
            height="15px"
            alt="success"
            className={classes.iconAlert}
          />
          <Alert>{error ? errorTxt : children}</Alert>
        </div>
      )}
    </>
  );
};
export default AlertMessage;

const useStylesAlert = makeStyles<DefaultTheme, any>({
  wrapAlert: props => ({
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, 0)",
    backgroundColor: props.backgroundColor,
    borderRadius: "5px",
    padding: "5px 20px",
    display: "flex",
    alignItems: "center"
  }),
  iconAlert: {
    marginRight: "5px"
  }
});
