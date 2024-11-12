
import { useDispatch, useSelector } from 'react-redux';
import { useMemo, useState } from 'react';

import { addToReadingList } from '../features/books/bookSlice';

const FilterGenre = ({ books }) => {

    const [selectedGenre, setSelectedGenre] = useState();

    const readingList = useSelector(state => state.books.readingList);

    const dispatch = useDispatch();

    // Obtenemos la lista única de géneros
    const genres = useMemo(() =>
        [...new Set(books.map(item => item.book.genre))]
        , [books]
    );

    // Filtramos los libros según el género seleccionado
    const filteredBooks = selectedGenre
        ? books.filter(item => item.book.genre === selectedGenre)
        : books;

    // Verificar si un libro ya está en la lista de lectura
    const isBookInReadingList = (book) => {
        return readingList.find(item => item.book.ISBN === book.book.ISBN);
    };

    // Función para manejar el cambio de género
    const handelGenreChange = (e) => {
        const value = e.target.value;
        setSelectedGenre(value || null);
    };

    // Función para agregar un libro a la lista de lectura
    const agregarLibro = (book) => {
        dispatch(addToReadingList(book));
    };

    return (
        <div className="px-4 mb-8">
            <select className="w-48 p-2 mb-8 bg-slate-100  text-black rounded" onChange={handelGenreChange}>
                <option value="">Todos los géneros</option>
                {genres.map((genre) => (
                    <option key={genre}>
                        {genre}
                    </option>
                ))}
            </select>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {filteredBooks.map((item) => (
                    <div className="flex flex-col items-center p-4 bg-slate-400 rounded" key={item.book.ISBN}>
                        <img className="w-[150px] h-[200px] rounded object-cover"
                            src={item.book.cover}
                        />
                        <p className="mt-2 text-center font-medium">{item.book.title}</p>
                        <p className="text-sm text-slate-300">{item.book.author.name}</p>
                        <button className={`mt-2 px-4 py-2 rounded transition-colors 
                        ${isBookInReadingList(item) ? 'bg-red-700 cursor-not-allowed' : 'bg-blue-500 hover:bg-gray-800'}`}
                            onClick={() => agregarLibro(item)}
                        >
                            Agregar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FilterGenre