
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deletedReadingList } from '../features/books/bookSlice';

const ReadingList = () => {

    const readingList = useSelector(state => state.books.readingList);

    const dispatch = useDispatch();

    const deleteBookReadingList = (id) => {
        dispatch(deletedReadingList(id));
    };

    return (
        <form className="bg-purple-900 grid items-center justify-items-center">
            <h2 className="text-2xl mb-4 text-center">Libros a leer</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {readingList.map((item) => (
                    <div className="flex flex-col items-center justify-center w-1/5 sm:w-1/3 md:w-1/3" key={item.book.ISBN}>
                        <img className="rounded" style={{ width: '150px', height: '200px' }} src={item.book.cover} alt={item.book.title} />
                        {item.book.title} - {item.book.author.name}
                        <button className='btn btn-danger '
                            onClick={() => deleteBookReadingList(item.book.ISBN)}>Eliminar</button>
                    </div>
                ))}
            </div>
        </form>
    )
}

export default ReadingList;
