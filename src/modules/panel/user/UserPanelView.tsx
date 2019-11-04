import React from "react";
import useStyles from "../trainer/TrainerPanelView.styles";
import { Typography, Box } from "@material-ui/core";
import PanelTemplate from "../../../templates/PanelTemplate";
import SettingsPanel from "../trainer/SettingsPanel";
import TrainersPanel from "./TrainersPanel";

interface UserPanelViewProps {}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
};

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
