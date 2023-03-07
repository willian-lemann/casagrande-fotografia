import { format } from "date-fns";

export function getPortifolioDate(date: Date) {
  const dt = new Date(date);

  const newDate = new Date(dt.valueOf() + dt.getTimezoneOffset() * 60 * 1000);

  return format(newDate, "dd.MM.yyyy");
}
