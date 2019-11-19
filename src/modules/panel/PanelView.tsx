import React from "react";
import TrainerPanelView from "../trainerPanel/TrainerPanelView";
import UserPanelView from "../userPanel/trainersView/components/UserPanelView";
import { useSelector } from "react-redux";
import { Store } from "../auth/duck/auth.interfaces";
import LoadingContainer from "../../utils/LoadingContainer";
import { Redirect } from "react-router";
import { routes } from "../../routes";

interface PanelViewProps {}

const PanelView: React.FC<PanelViewProps> = props => {
  const { currentUser, isFetching, error } = useSelector((state: Store) => state.user);
  if (currentUser === undefined) return <Redirect to={routes.loginPage} />;
  const isTrainer = currentUser!.isTrainer;
  return (
    <>
      <LoadingContainer isFetching={isFetching} errorTxt={error}>
        {isTrainer ? <TrainerPanelView /> : <UserPanelView />}
      </LoadingContainer>
    </>
  );
};
export default PanelView;
