import './App.css'
import * as BookModel from './models/BookModel.ts'
import Book from './components/book-viewer'

function App() {

  const prop: BookModel.Book[] = [
    {
      ISBN: 1,
      name: "New Book",
      price: 200.20
    },
    {
      ISBN: 2,
      name: "Second Book",
      price: 2230.20
    },
    {
      ISBN: 3,
      name: "Second Book",
      price: 2230.20
    },
    {
      ISBN: 4,
      name: "Second Book",
      price: 2230.20
    }
  ]

  return (
    <>
      <Book books={prop} />
    </>
  )
}

export default App
