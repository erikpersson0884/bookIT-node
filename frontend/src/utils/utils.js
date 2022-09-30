import moment from "moment";

export const formatDT = date => moment(Date(date)).format("yyyy-MM-DD HH:mm");
export const formatDate = date => moment(date).format("yyyy-MM-DD");
export const formatTime = date => moment(date).format("HH:mm");
