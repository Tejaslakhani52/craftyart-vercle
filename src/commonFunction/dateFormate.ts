export const dateFormate = (date: any) => {
  const inputDate = date;
  const parts = inputDate?.split(" ");
  const datePart = parts?.[0];
  const formattedDate = datePart?.split("/")?.reverse()?.join("-");
  return formattedDate;
};
