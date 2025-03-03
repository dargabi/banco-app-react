// Definición de varias cuentas de usuario con propiedades como el propietario, movimientos financieros, tasa de interés y un PIN.
const account1 = {
  owner: 'Carlos Gómez',
  movements: [500, 1200, -300, 4500, -800, -200, 100, 1500],
  interestRate: 1.8, // %
  pin: 4321,
}

const account2 = {
  owner: 'Lucía Martínez',
  movements: [3000, 2000, -250, -600, -2000, -500, 7000, -100],
  interestRate: 2.3, // %
  pin: 5678,
}

const account3 = {
  owner: 'Andrés Pérez',
  movements: [100, -100, 500, -500, -50, 70, 300, -300],
  interestRate: 1.1, // %
  pin: 8765,
}

const account4 = {
  owner: 'Isabel Fernández',
  movements: [800, 1500, 900, 100, 200],
  interestRate: 1.5, // %
  pin: 1234,
}

// Agrupar las cuentas en un array
const accounts = [account1, account2, account3, account4]

// Función para crear los nombres de usuario a partir de los nombres completos de los titulares
const createUsernames = (accounts) => {
  accounts.forEach(account => {
    // Crear el nombre de usuario a partir del nombre del propietario
    account.username = account.owner
      .split(' ')
      .map(name => name[0].toLowerCase()) // Tomar la primera letra de cada palabra
      .join(''); // Unir las letras obtenidas
  });
};

// Llamada a la función para generar los nombres de usuario
createUsernames(accounts);

// Exportar el array de cuentas con los nombres de usuario añadidos
export default accounts;
