import React, { createContext, useContext, useEffect, useReducer } from "react";
// reducer实现redux，step 1: 将数据集中在一个store对象
const store = {
    user: null,
    books: null,
    movies: null,
}

// reducer实现redux，step 2: 将所有操作集中在reducer对象
const reducer = (state, action) => {
    console.log("reducer",action);
    switch (action.type) {
        case "setUser":
            return {...state, user: action.user};
        case "setBooks":
            return {...state, books: action.books};
        case "setMovies":
            return {...state, movies: action.movies};
        default:
            return new Error("type error");
    }
}
// reducer实现redux，step 3: 创建一个Context
const Context = createContext(null);


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

const Users = (props) => {
    // reducer实现redux，step 7: 组件用useContext获取读写api
    const {state, dispatch} = useContext(Context);
    // useEffect(() => {},[]); // 相当于 componentDidMount
    useEffect(() => {
        ajax("/user").then(((res) => {
            dispatch({type: "setUser", user: res});
        }));
    },[]);
    return (
        <>
            <h1>个人信息</h1>
            <div>name: {state.user ? state.user.name : ""}</div>
        </>
    )
};
const Books = (props) => {
    const {state,dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/books").then((res) => {
            dispatch({type:"setBooks",books:res})
        })
    })
    return (
        <>
            <h1>我的书籍</h1>
            {state?.books?.map((book) => {
                return <div key={book.id}>{book.name}</div>
            })}
        </>
    )
};
const Movies = (props) => {
    const {state,dispatch} = useContext(Context);
    useEffect(() => {
        ajax("/movies").then((res) => {
            dispatch({type:"setMovies",movies: res});
        })
    },[]);
    console.log(state?.movies)
    return (
        <>
            <h1>我的电影</h1>
            {state?.movies?.map((movie) => {
                return <div key={movie.id}>{movie.name}</div>
            })}
        </>
    )
};


function ajax(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path === "/user") {
                resolve({
                    id: 1,
                    name: "dswang"
                });
            } else if (path === "/books") {
                resolve([
                    {
                        id: 1,
                        name: "JavaScript 高级程序设计"
                    },
                    {
                        id: 2,
                        name: "JavaScript 精粹"
                    }
                ]);
            } else if (path === "/movies") {
                resolve([
                    {
                        id: 1,
                        name: "爱在黎明破晓前"
                    },
                    {
                        id: 2,
                        name: "恋恋笔记本"
                    }
                ]);
            }
        }, 2000);
    });
}


export default AppReducerForRedux