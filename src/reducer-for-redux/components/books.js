import React, { useContext, useEffect } from "react";
import Context from "../context";
import ajax from "../ajax-follow";

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

export default Books;