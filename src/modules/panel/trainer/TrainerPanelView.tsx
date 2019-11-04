import React from "react";
import useStyles from "./TrainerPanelView.styles";
import PanelTemplate from "../../../templates/PanelTemplate";
import OfferPanel from "./OfferPanel";
import CommentsPanel from "./CommentsPanel";
import SettingsPanel from "./SettingsPanel";
import TabPanel from "../../../utils/TabPanel";

interface TrainerPanelViewProps {}

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
