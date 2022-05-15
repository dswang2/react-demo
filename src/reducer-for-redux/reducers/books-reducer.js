const booksReducer = {
    setBooks: (state, action)=>{
        return {...state, books: action.books};
    },
    delBooks: () => {
        return {};
    }
}

export default booksReducer;