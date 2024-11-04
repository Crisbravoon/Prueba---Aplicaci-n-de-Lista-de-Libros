
import { createSlice } from "@reduxjs/toolkit";
import bookData from '../../data/books.json'

const initialState = {
    books: bookData.library,
};

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addToList: (state, action) => { 
            return {...state, books: [...state.books, action.payload] };
        },

        removeBook: (state, action) => {
            return state.books.filter(book => book.id !== action.payload);
        },
    }
});

export const { removeBook } = bookSlice.actions;
export default bookSlice.reducer;
