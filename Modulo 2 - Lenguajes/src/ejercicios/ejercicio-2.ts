// Concat: unir dos arrays (inmutable) con spread
const concat = (a: any[], b: any[]) => {
  return [...a, ...b];
};
console.log("Concat:", concat([1, 2, 3], [4, 5, 6]));

// Concat múltiple: más de dos arrays, sin usar Array.prototype.concat
const concatMultiple = (...listas: any[][]) => {
  let resultado: any[] = [];
  for (const lista of listas) {
    resultado = [...resultado, ...lista];
  }
  return resultado;
};
console.log("ConcatMultiple:", concatMultiple([1], [2, 3], [4, 5, 6]));
