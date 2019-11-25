export const roundedDate = (minutes: number, d = new Date()) => {
  let ms = 1000 * 60 * minutes;
  let roundedDate = new Date(Math.round(d.getTime() / ms) * ms);
  return roundedDate;
};

export const roundedDateForward = (forwardMinutes: number) => {
  const d = roundedDate(60);
  return new Date(d.setMinutes(d.getMinutes() + forwardMinutes));
};
