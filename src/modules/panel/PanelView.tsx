import React from "react";
import TrainerPanelView from "./trainer/TrainerPanelView";
import UserPanelView from "./user/UserPanelView";

interface PanelViewProps {}

const PanelView: React.FC<PanelViewProps> = props => {
  const isTrainer = false;
  return <>{isTrainer ? <TrainerPanelView /> : <UserPanelView />}</>;
};
export default PanelView;
