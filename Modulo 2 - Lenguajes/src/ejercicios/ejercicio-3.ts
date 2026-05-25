// Clone: devuelve un nuevo objeto con las mismas propiedades
function clone(source: Record<string, any>) {
  return { ...source };
}

// Merge: mezcla target y source; si coinciden claves, gana source
function merge(source: Record<string, any>, target: Record<string, any>) {
  return { ...target, ...source };
}

// Pruebas
const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

console.log("clone(a):", clone(a));
console.log("merge(a, b):", merge(a, b));
// Esperado: {name:"Maria", age:31, married:true, surname:"Ibañez", country:"SPA"}
