// @@ format time @@
// take input as 12:15:00
// give output as 12:15

export const formatTime = (time: string) => {
  return time.slice(0, -3);
};

export const formatDate = (dateString: string) => {
  const today = new Date();
  const date = new Date(dateString);

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }

  const formattedDate = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  return formattedDate;
};
