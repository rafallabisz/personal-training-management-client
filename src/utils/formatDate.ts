import moment from "moment";

export const formatDate = (date: Date, format = "MMM Do YY, h:mm:ss a") => {
  return moment(date).format(format);
};
