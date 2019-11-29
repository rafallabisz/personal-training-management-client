import React from "react";
import useStyles from "../../../trainerPanel/TrainerPanelView.styles";
import TabPanel from "../../../../utils/TabPanel";
import PanelTemplate from "../../../../templates/PanelTemplate";
import SettingsPanel from "../../../trainerPanel/settingsView/SettingsPanel";
import TrainersPanel from "./TrainersPanel";
import UserReservationsList from "../../userReservationsList/components/UserReservationsList";

interface UserPanelViewProps {}

const UserPanelView: React.FC<UserPanelViewProps> = props => {
  const listMenu = ["Trainers", "My Reservations", "Settings"];
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  return (
    <PanelTemplate value={value} setValue={setValue} listMenu={listMenu}>
      <main className={classes.content}>
        <TabPanel value={value} index={0}>
          <TrainersPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <UserReservationsList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SettingsPanel />
        </TabPanel>
      </main>
    </PanelTemplate>
  );
};
export default UserPanelView;
