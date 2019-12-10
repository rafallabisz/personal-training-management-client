import React, { useState } from "react";
import { CardActions, CardContent, TextField, Card, Grid, Button } from "@material-ui/core";
import useStyles from "./SettingsPanel.styles";
import SaveIcon from "@material-ui/icons/Save";
import { SettingsData } from "../duck/panel.interface";
import { useSelector, useDispatch } from "react-redux";
import { Store } from "../../auth/duck/auth.interfaces";
import { panelUpdateUserActionCreator } from "../duck/panel.operations";
import imageUtility from "../../../utils/imageUtility";
import PanelTemplate from "../../../templates/PanelTemplate";

interface SettingsPanelProps {}

const SettingsPanel: React.FC<SettingsPanelProps> = props => {
  const dispatch = useDispatch();
  const { _id, firstName, lastName, email, password, data } = useSelector((state: Store) => state.user.currentUser!);
  const initSettingsData = {
    firstName,
    lastName,
    password: undefined,
    email,
    data: {
      age: data ? data.age : undefined,
      city: data ? data.city : undefined,
      phone: data ? data.phone : undefined,
      avatar: data ? data.avatar : undefined,
      gallery: data ? ["img1", "img2"] : undefined
    }
  };
  const [settingsData, setSettingData] = useState<SettingsData>(initSettingsData);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "age" || e.target.name === "phone" || e.target.name === "city") {
      setSettingData({
        ...settingsData,
        data: { ...settingsData.data, [e.target.name]: e.target.value }
      });
    } else {
      setSettingData({
        ...settingsData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      setSettingData({
        ...settingsData,
        data: { ...settingsData.data, avatar: await imageUtility.toBase64(e.currentTarget.files[0]) }
      });
    }
  };

  const handleGallery = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const img: string[] = settingsData.data.gallery || [];
      setSettingData({
        ...settingsData,
        data: { ...settingsData.data, gallery: [...img, await imageUtility.toBase64(e.currentTarget.files[0])] }
      });
    }
  };

  const handleSaveSettingsData = () => {
    dispatch(panelUpdateUserActionCreator(_id, settingsData));
  };
  console.log(settingsData, "--settingsData");

  const classes = useStyles();
  return (
    <PanelTemplate>
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
                  name="firstName"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={firstName}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="Last name"
                  type="search"
                  name="lastName"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={lastName}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="Email"
                  type="search"
                  name="email"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={email}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="Phone"
                  type="number"
                  name="phone"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={data ? data.phone : undefined}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="City"
                  type="search"
                  name="city"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={data ? data.city : undefined}
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="Age"
                  type="number"
                  name="age"
                  className={classes.textField}
                  margin="normal"
                  defaultValue={data ? data.age : undefined}
                  onChange={handleChangeInput}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <input
                  className={classes.textField}
                  id="upload_avatar"
                  type="file"
                  name="avatar"
                  onChange={e => handleAvatarChange(e)}
                />
                <img src={data ? data.avatar : ""} width="150px" alt="avatar" className={classes.avatar} />
              </Grid>

              <Grid item xs={12} sm={6}>
                <input
                  className={classes.textField}
                  id="galley"
                  type="file"
                  name="gallery"
                  onChange={e => handleGallery(e)}
                />
                {/* <img src={data ? data.avatar : ""} width="150px" alt="avatar" className={classes.avatar} /> */}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  id="filled-search"
                  label="Confirm password"
                  type="password"
                  name="password"
                  error={settingsData.password === "" || settingsData.password === undefined}
                  className={classes.textField}
                  margin="normal"
                  autoComplete="current-password"
                  onChange={handleChangeInput}
                />
              </Grid>
            </Grid>
            <Button
              onClick={() => handleSaveSettingsData()}
              variant="contained"
              color="primary"
              size="small"
              startIcon={<SaveIcon />}
              className={classes.btnSave}
              disabled={settingsData.password ? false : true}
            >
              Save
            </Button>
          </form>
        </CardActions>
      </Card>
    </PanelTemplate>
  );
};
export default SettingsPanel;
