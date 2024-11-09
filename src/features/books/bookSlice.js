
import { createSlice } from "@reduxjs/toolkit";
import bookData from '../../data/books.json'

const initialState = {
    books: bookData.library,
    readingList: [],
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {

        addToReadingList: (state, action) => {
            const bookToAdd = action.payload;
            // Usamos un condicional para evitar agregar el mismo libro más de una vez
            !state.readingList.some(book => book.book.ISBN === bookToAdd.book.ISBN) && state.readingList.push(bookToAdd);
        },

    }
});

export const { addToReadingList } = bookSlice.actions;
export default bookSlice.reducer;
