import React, { createContext, useContext, useEffect, useReducer } from "react";
import Context from "./context";
import Users from "./components/users";
import Books from "./components/books";
import Movies from "./components/movies";
import UserReducer from "./reducers/user-reducer"
import BooksReducer from "./reducers/books-reducer"
import MoviesReducer from "./reducers/movies-reducer"
// reducer实现redux，step 1: 将数据集中在一个store对象
const store = {
    user: null,
    books: null,
    movies: null,
}

const reduces = {
    ...UserReducer,
    ...BooksReducer,
    ...MoviesReducer,
}

// reducer实现redux，step 2: 将所有操作集中在reducer对象
const reducer = (state, action) => {
    console.log(reduces);
    console.log(action);
    const fn = reduces[action.type];
    if (fn) {
        return fn(state, action);
    }
    throw new Error("type error");
}


const AppReducerForRedux = (props) => {
    // reducer实现redux，step 4: 创建对数据读写API
    const [state, dispatch] = useReducer(reducer, store);

    // reducer实现redux，step 5: 将第4步的读写api放到第3步的context中
    // reducer实现redux，step 6: 用Context.Provider将Context的内容提供给组件
    return (
        <Context.Provider value={{state, dispatch}}>
            <Users/>
            <hr/>
            <Books/>
            <Movies/>
        </Context.Provider>
    )

}

export default AppReducerForRedux