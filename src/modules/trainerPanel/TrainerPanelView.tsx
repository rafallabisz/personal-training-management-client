import React from "react";
import useStyles from "./TrainerPanelView.styles";
import PanelTemplate from "../../templates/PanelTemplate";
import OfferPanel from "./offerView/components/OfferPanel";
import CommentsPanel from "./commentsView/CommentsPanel";
import SettingsPanel from "./settingsView/SettingsPanel";
import TabPanel from "../../utils/TabPanel";

interface TrainerPanelViewProps {}

const TrainerPanelView: React.FC<TrainerPanelViewProps> = props => {
  const listMenu = ["Offer", "Comments", "Settings"];
  const classes = useStyles();
  const [value, setValue] = React.useState<number>(0);

  return (
    <PanelTemplate value={value} setValue={setValue} listMenu={listMenu}>
      <main className={classes.content}>
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
