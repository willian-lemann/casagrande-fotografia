import { format } from "date-fns";

export function getPortifolioDate(date: Date) {
  return format(new Date(date), "dd.MM.yyyy");
}
