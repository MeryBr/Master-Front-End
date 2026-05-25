const frutas = ["Sandía", "Plátano", "Fresa", "Manzana"];

// Head: devuelve el primer elemento (usando destructuring)
const head = (arr: any[]) => {
  const [primero] = arr;
  return primero;
};
console.log("Head:", head(frutas));

// Tail: devuelve todo menos el primero (usando rest)
const tail = (arr: any[]) => {
  const [, ...resto] = arr;
  return resto;
};
console.log("Tail:", tail(frutas));

// Init: devuelve todo menos el último (usando slice)
const init = (arr: any[]) => {
  return arr.slice(0, -1);
};
console.log("Init:", init(frutas));

// Last: devuelve el último elemento (forma simple)
const last = (arr: any[]) => {
  return arr[arr.length - 1];
};
console.log("Last:", last(frutas));
