export const getDate = () => {
  const today = new Date();
  const date = today.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthName = monthNames[today.getMonth()];
  const year = today.getFullYear();
  const formattedDate = `${date} ${monthName} ${year}`; // formatting the date
  return formattedDate;
};
