import * as BookModel from "../models/BookModel.ts"

const Book = ({ books }: { books: BookModel.Book[] }) => {
    return (
        <>
            {books.map((book) => (
                <div id={book.ISBN.toString()}>
                    <h1>{book.name}</h1>
                    <hr />
                    <p>{book.price}</p>
                </div>
            ))}
        </>
    )
}

export default Book
