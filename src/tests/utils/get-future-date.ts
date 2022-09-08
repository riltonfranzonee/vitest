import { setYear, parseISO } from "date-fns";

/* 
  Receives "2022-08-10" and returns "2023-8-10" Date Object
*/

export function getFutureDate(date: string): Date {
  const parsedDate = parseISO(date);

  return setYear(parsedDate, new Date().getFullYear() + 1);
}
