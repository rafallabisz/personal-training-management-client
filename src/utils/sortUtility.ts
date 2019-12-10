import { ReservationResponse } from "../modules/reservations/duck/reservations.interfaces";
import { CommentsResponse } from "../modules/comments/duck/comments.interfaces";

export const sortReservationsByDate = (reservations: ReservationResponse[]) => {
  return reservations.sort((a, b) => new Date(b.reserveDate).getTime() - new Date(a.reserveDate).getTime());
};

export const sortCommentsListByDate = (comments: CommentsResponse[]) => {
  return comments.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};
