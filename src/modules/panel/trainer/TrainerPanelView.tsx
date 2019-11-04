import React from "react";
import { Typography, Box } from "@material-ui/core";
import useStyles from "./TrainerPanelView.styles";
import PanelTemplate from "../../../templates/PanelTemplate";
import OfferPanel from "./OfferPanel";
import CommentsPanel from "./CommentsPanel";
import SettingsPanel from "./SettingsPanel";

interface TrainerPanelViewProps {}

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

const TrainerPanelView: React.FC<TrainerPanelViewProps> = props => {
  const listMenu = ["Offer", "Comments", "Settings"];
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  return (
    <PanelTemplate value={value} setValue={setValue} listMenu={listMenu}>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TabPanel value={value} index={0}>
          <OfferPanel />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <CommentsPanel />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SettingsPanel />
        </TabPanel>
      </main>
    </PanelTemplate>
  );
};
export default TrainerPanelView;
