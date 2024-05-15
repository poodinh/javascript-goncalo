function Book(title, author){
    this.title=title;
    this.author=author;
};

const bookOne= new Book('Os três mosqueteiros', 'Alexandre Dumas');
const bookTwo= new Book('Os Maias', 'Eça de Queiroz');

console.log(bookOne);
console.log(bookOne.title);
console.log(bookOne.author);
console.log(bookTwo);
console.log(bookTwo.title);
console.log(bookTwo.author);

bookOne.title='O conde de monte cristo';