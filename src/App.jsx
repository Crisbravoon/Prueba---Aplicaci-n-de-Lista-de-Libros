
import { useDispatch, useSelector } from 'react-redux'
import { useMemo, useState } from 'react';
import { addToReadingList } from './features/books/bookSlice.js';
import './index.css'

function App() {

  const [genero, setGenero] = useState();
  const [selectedBook, setSelectedBook] = useState(true);

  const dispatch = useDispatch();

  const books = useSelector(state => state.books.books);
  const totalBooks = books.length;

  const readingList = useSelector(state => state.books.readingList);
  const totalRedingList = readingList.length;


  const generos = useMemo(() =>
    [...new Set(books.map(item => item.book.genre))],
    [books]
  );


  const filteredBooks = genero
    ? books.filter(item => item.book.genre === genero)
    : books;

  const generoSeleccionado = (genero) => {
    setGenero(genero);
  };

  const agregarLibro = (book) => {
    setSelectedBook(book);
    // Despachar la acción para agregar el libro a la lista de lectura
    dispatch(addToReadingList(book));
  };

  return (
    <main className="flex flex-col justify-between min-h-screen bg-slate-600 text-white">
      <div className="grid grid-cols-2 gap-4 mt-3 ">
        <section className="mb-3 flex-grow">
          <div className='mb-3'>
            <h1 className="text-2xl ml-20">{`${totalBooks} Libros diponibles`}</h1>
            <h3 className="text-lg ml-20 mb-16">{`${totalRedingList} En lista de lectura`}</h3>
          </div>

          <div className="dropdown ml-4 mb-8">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Filtrar Genero
            </button>
            <ul className="dropdown-menu">

              {/* Muestra todos los libros */}
              <li><a className="dropdown-item" href="#" onClick={() => generoSeleccionado()}>Todos</a></li>

              {/* Muestra los generos disponibles */}
              {generos.map((genre) => (
                <li key={genre}><a className="dropdown-item" onClick={() => generoSeleccionado(genre)} href="#">{genre}</a></li>
              ))}

            </ul>
          </div>

          <form className=" items-center  grid grid-cols-4 gap-4">
            {filteredBooks.map((item) => (
              <div className="flex flex-col items-center  md:w-120" key={item.book.ISBN}>
                <img className="rounded" style={{ width: '150px', height: '200px' }} src={item.book.cover} alt={item.book.title} />
                <p className='flex flex-col item-center  text-center justify-center'>{item.book.title} </p>
                <p>  {item.book.author.name}</p>
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => agregarLibro(item)}
                  disabled={selectedBook === item}  // Agregar el libro a la lista de lectura
                >
                  Agregar
                </button>
              </div>
            ))}
          </form>
        </section>

        <section className='bg-purple-900 rounded text-white py-6'>
          <form className="grid items-center justify-items-center">
            <h2 className="text-2xl mb-4 text-center">Libros a leer</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Mostrar los libros que están en la lista de lectura */}
              {readingList.map((item) => (
                <div className="flex flex-col items-center justify-center w-1/5 sm:w-1/3 md:w-1/3" key={item.book.ISBN}>
                  <img className="rounded" style={{ width: '150px', height: '200px' }} src={item.book.cover} alt={item.book.title} />
                  {item.book.title} - {item.book.author.name}
                </div>
              ))}
            </div>
          </form>
        </section>
      </div>
    </main>
  )
}

export default App
