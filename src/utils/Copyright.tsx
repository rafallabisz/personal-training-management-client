import React from "react";
import { Typography } from "@material-ui/core";

interface CopyrightProps {}

const Copyright: React.FC<CopyrightProps> = props => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"© 2019 Rafal Labisz "}
    </Typography>
  );
};
export default Copyright;
