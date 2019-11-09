import React from "react";
import TrainerPanelView from "./trainer/TrainerPanelView";
import UserPanelView from "./user/UserPanelView";
import { useSelector } from "react-redux";
import { Store } from "../auth/duck/auth.interfaces";

interface PanelViewProps {}

const PanelView: React.FC<PanelViewProps> = props => {
  const { currentUser } = useSelector((state: Store) => state.user);
  const isTrainer = currentUser!.isTrainer;
  return <>{isTrainer ? <TrainerPanelView /> : <UserPanelView />}</>;
};
export default PanelView;
