/**
 * Función auxiliar para crear fechas pasadas
 * @param {number} daysAgo - Número de días a restar de la fecha actual
 * @returns {string} Fecha en formato ISO
 */
const createPastDate = (daysAgo) => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.toISOString();
};

/**
 * Datos iniciales de las cuentas bancarias
 * Cada cuenta incluye:
 * - owner: Nombre completo del propietario
 * - movements: Array de movimientos con cantidad y fecha
 * - pin: PIN de acceso a la cuenta
 * - username: Nombre de usuario generado a partir del nombre
 */
const accounts = [
  {
    owner: 'Carlos Gómez',
    movements: [
      { amount: 200, date: createPastDate(7) },
      { amount: 450, date: createPastDate(6) },
      { amount: -400, date: createPastDate(5) },
      { amount: 3000, date: createPastDate(4) },
      { amount: -650, date: createPastDate(3) },
      { amount: -130, date: createPastDate(2) },
      { amount: 70, date: createPastDate(1) },
      { amount: 1300, date: createPastDate(0) }
    ],
    pin: 1111,
    username: 'cg'
  },
  {
    owner: 'Lucía Martínez',
    movements: [
      { amount: 5000, date: createPastDate(7) },
      { amount: 3400, date: createPastDate(6) },
      { amount: -150, date: createPastDate(5) },
      { amount: -790, date: createPastDate(4) },
      { amount: -3210, date: createPastDate(3) },
      { amount: -1000, date: createPastDate(2) },
      { amount: 8500, date: createPastDate(1) },
      { amount: -30, date: createPastDate(0) }
    ],
    pin: 2222,
    username: 'lm'
  },
  {
    owner: 'Andrés Pérez',
    movements: [
      { amount: 200, date: createPastDate(7) },
      { amount: -200, date: createPastDate(6) },
      { amount: 340, date: createPastDate(5) },
      { amount: -300, date: createPastDate(4) },
      { amount: -20, date: createPastDate(3) },
      { amount: 50, date: createPastDate(2) },
      { amount: 400, date: createPastDate(1) },
      { amount: -460, date: createPastDate(0) }
    ],
    pin: 3333,
    username: 'ap'
  },
  {
    owner: 'Isabel Fernández',
    movements: [
      { amount: 430, date: createPastDate(4) },
      { amount: 1000, date: createPastDate(3) },
      { amount: 700, date: createPastDate(2) },
      { amount: 50, date: createPastDate(1) },
      { amount: 90, date: createPastDate(0) }
    ],
    pin: 4444,
    username: 'if'
  }
];

export default accounts;
