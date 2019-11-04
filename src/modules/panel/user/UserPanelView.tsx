import React from "react";
import useStyles from "../trainer/TrainerPanelView.styles";
import TabPanel from "../../../utils/TabPanel";
import PanelTemplate from "../../../templates/PanelTemplate";
import SettingsPanel from "../trainer/SettingsPanel";
import TrainersPanel from "./TrainersPanel";

interface UserPanelViewProps {}

const UserPanelView: React.FC<UserPanelViewProps> = props => {
  const listMenu = ["Trainers", "Settings"];
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  return (
    <PanelTemplate value={value} setValue={setValue} listMenu={listMenu}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TabPanel value={value} index={0}>
          <TrainersPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SettingsPanel />
        </TabPanel>
      </main>
    </PanelTemplate>
  );
};
export default UserPanelView;
