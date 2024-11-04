
import './index.css'

import { useSelector } from 'react-redux'


function App() {


  const books = useSelector(state => state.books.books);
  const totalBooks = books.length;
  console.log('App', books);

  return (
    <main class="flex flex-col justify-center h-screen bg-slate-600 text-white">
      <div class="grid grid-cols-2 gap-4 mt-3 ">
        <section class='mb-3'>
          <div class='mb-3'>

            <h1 class="text-2xl ml-20">{`${totalBooks} Libros diponibles`}</h1>
            <h3 class="text-lg ml-20 mb-16">En lista de lectura</h3>
          </div>

          <form class="grid grid-cols-5 gap-4 ">
            {books.map((item) => (
              <div class="flex flex-col items-center" key={item.book.ISBN}>
                <img class="rounded" style={{ width: '150px', height: '200px'}} src={item.book.cover} alt={item.book.title} />
                <p class='flex flex-col item-center  text-center justify-center'>{item.book.title} </p>
                <p>  {item.book.author.name}</p>
              </div>
            ))}
          </form>
        </section>

        <section>
          <h2 class="text-2xl">Libros a leer</h2>
          <ul>
            <li>Libro 1</li>
            <li>Libro 2</li>
            <li>Libro 3</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default App
