interface Book {
  title: string;
  isRead: boolean;
}

// Devuelve true si existe el libro y está leído; si no, false
function isBookRead(books: Book[], titleToSearch: string): boolean {
  const book = books.find((b) => b.title === titleToSearch);
  return book ? book.isRead === true : false;
}

// Pruebas
const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
