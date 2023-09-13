export const formatDateTime = (dateString) => {
  const date = new Date(dateString);

  const optionsTime = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const optionsDate = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeString = date.toLocaleTimeString(undefined, optionsTime);
  const dateString2 = date.toLocaleDateString(undefined, optionsDate);

  return `${timeString} ${dateString2}`;
};

export function calculateTimeDifferenceInMinutes(dateString) {
  // Parse the input date string into a Date object
  const inputDate = new Date(dateString);

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds and convert it to minutes
  const timeDifferenceInMilliseconds = Math.abs(currentDate - inputDate);
  const timeDifferenceInMinutes = timeDifferenceInMilliseconds / (1000 * 60);

  return timeDifferenceInMinutes;
}
