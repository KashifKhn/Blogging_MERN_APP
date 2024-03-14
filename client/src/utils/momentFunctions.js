import moment from "moment";

export function getTimeAgo(date) {
  return moment(date).fromNow();
}
