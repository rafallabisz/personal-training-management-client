import moment from "moment";

export const formatDate = (date: Date) => {
  return moment(date).format("MMM Do YY, h:mm:ss a");
};
