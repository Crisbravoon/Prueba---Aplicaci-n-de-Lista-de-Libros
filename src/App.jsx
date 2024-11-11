
import { useSelector } from 'react-redux'

import ReadingList from './components/readingList';
import FilterGenre from './components/FilterGenre';
import './index.css'


function App() {

  // Obtenemos todos los libros del estado.
  const books = useSelector(state => state.books.books);

  // Buscamos en nuestro estado los libros que estan por leer.
  const totalRedingList = useSelector(state => state.books.readingList.length);

  return (
    <main className="flex flex-col justify-between min-h-screen bg-slate-600 text-white">
      <div className="grid grid-cols-2 gap-4 mt-3 ">

        {/* Sección de Libros disponibles y por */}
        <section className="mb-3 flex-grow">
          <div className='mb-3'>
            <h1 className="text-2xl ml-20">{`${books.length} Libros diponibles`}</h1>
            <h3 className="text-lg ml-20 mb-16">{`${totalRedingList} En lista de lectura`}</h3>
          </div>

          <FilterGenre books={books}/>
        </section>

        <section className=' rounded text-white py-6'>
          <ReadingList />
        </section>
      </div>
    </main>
  )
}

export default App
