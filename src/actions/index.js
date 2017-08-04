export function selectBook(book) {
  console.log(book.title);
  return {
    type: 'SELECT_BOOK',
    payload: book
  };
};
