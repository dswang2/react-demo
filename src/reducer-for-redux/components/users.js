import React, { useContext, useEffect } from "react";
import Context from "../context";
import ajax from "../ajax-follow";

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

export default Users