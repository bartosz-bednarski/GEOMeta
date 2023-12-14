export const getTodayDateString = () => {
  var month = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];
  let date = new Date();
  let day = String(date.getDate());
  day = day.length === 1 ? `0${day}` : day;

  let dateExpo = day + " " + month[date.getMonth()] + " " + date.getFullYear();
  return dateExpo;
};
