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

const getDiaDelMes = (fecha) => {
  return monthNames[fecha.getMonth()];
};

const diasHastaHoy = (fecha) =>
  Math.round((new Date() - fecha) / (1000 * 60 * 60 * 24));

const getStringMovimiento = (fecha) => {
  const fechaFormateada = new Date(fecha);
  const diasDiferencia = diasHastaHoy(fechaFormateada);
  const stringDiasDiferencia = (diasDiferencia) => {
    if (diasDiferencia === 0) {
      return "Today";
    } else if (diasDiferencia === 1) {
      return "Yesterday";
    } else {
      return `${diasDiferencia} Days Ago`;
    }
  };

  return `${getDiaDelMes(
    fechaFormateada
  )} ${fechaFormateada.getDate()}, ${fechaFormateada.getFullYear()} - ${stringDiasDiferencia(
    diasDiferencia
  )}`;
};

const getHoraString = (fecha) => {
  const fechaFormateada = new Date(fecha);

  let hours = fechaFormateada.getHours();
  let minutes = fechaFormateada.getMinutes();
  let ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
module.exports = {
  getStringMovimiento,
  getHoraString,
};
