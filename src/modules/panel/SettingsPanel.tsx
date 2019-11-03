import React from "react";
import { CardActions, CardContent, TextField, Card, Grid, Button } from "@material-ui/core";
import useStyles from "./SettingsPanel.styles";
import SaveIcon from "@material-ui/icons/Save";

interface SettingsPanelProps {}

const SettingsPanel: React.FC<SettingsPanelProps> = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.title}>Settings: </CardContent>
      <CardActions>
        <form noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="First name"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"Rafal"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Last name"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"Labisz"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Email"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"rafal@gmail.com"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Phone"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"500 500 500"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="City"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"Wrocław"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Age"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"22"}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Phone"
                type="search"
                className={classes.textField}
                margin="normal"
                defaultValue={"500 500 500"}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                id="filled-search"
                label="Password"
                type="password"
                className={classes.textField}
                margin="normal"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" size="small" startIcon={<SaveIcon />} className={classes.btnSave}>
            Save
          </Button>
        </form>
      </CardActions>
    </Card>
  );
};
export default SettingsPanel;
