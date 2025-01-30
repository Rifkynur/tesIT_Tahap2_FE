export const useFormattedDate = (inputDate) => {
  const date = new Date(inputDate);
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formatter = new Intl.DateTimeFormat("id-ID", options);
  return formatter.format(date);
};
