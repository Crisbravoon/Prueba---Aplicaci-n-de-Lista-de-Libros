
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

            //Guardamos los libros que se leeran.
            const bookToAdd = action.payload;

            //Validamos si el ID del book no son iguales, de no ser así lo agrega a readingList.
            if (!state.readingList.find(book => book.book.ISBN === bookToAdd.book.ISBN)) {
                state.readingList.push(bookToAdd);
            }
        },
        deletedReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.book.ISBN !== action.payload);
        },
    },
});

export const { addToReadingList, deletedReadingList } = bookSlice.actions;
export default bookSlice.reducer;
