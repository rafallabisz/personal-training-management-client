import React, { useEffect } from "react";
import useStylesUserReservationsList from "./UserReservationsList.styles";
import { CardContent, Card, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getReservationsActionCreator } from "../../reservations/duck/reservations.operations";
import { Store } from "../../../auth/duck/auth.interfaces";
import { formatDate } from "../../../../utils/formatDate";
import LoadingContainer from "../../../../utils/LoadingContainer";

interface UserReservationsListProps {}

const UserReservationsList: React.FC<UserReservationsListProps> = props => {
  const dispatch = useDispatch();
  const { _id } = useSelector((state: Store) => state.user.currentUser!);
  const { reservations, isFetching } = useSelector((state: Store) => state.reservations);
  useEffect(() => {
    dispatch(getReservationsActionCreator(_id));
  }, []);

  const classes = useStylesUserReservationsList();
  return (
    <LoadingContainer isFetching={isFetching}>
      <Card className={classes.card}>
        <CardContent className={classes.title}>My reservations:</CardContent>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Trainer name</TableCell>
              <TableCell>Selected training</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map(reservation => (
              <TableRow key={reservation._id} hover>
                <TableCell component="th" scope="row">
                  {reservation.firstName} {reservation.lastName}
                </TableCell>
                <TableCell>{reservation.selectTrainingType}</TableCell>
                <TableCell>{formatDate(reservation.reserveDate, "Do MMMM YYYY, h:mm:ss a")}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </LoadingContainer>
  );
};
export default UserReservationsList;
