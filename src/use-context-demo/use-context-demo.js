import React, { createContext, useContext, useState } from "react";
import "./style.css"

// 定义全局容器，可以存储数据，操作数据的方法
const Context = createContext(null);

export default (props) => {
    const [n, setN] = useState(0);
    const config = {n, setN};
    return (
        // 使用全局容器，将需要全局使用的数据和方法作为对象传入到Provider中
        <Context.Provider value={config}>
            <Father/>
        </Context.Provider>
    );
}

const Father = (props) => {
    const {n:data, setN} = useContext(Context);
    return (
        <div className={"H1"}>
            我是爸爸
            <hr/>
            <div>data: {data}</div>
            <Son/>
        </div>
    );
}

const Son = (props) => {
    const {n, setN} = useContext(Context);
    const add = () => {
        setN(n => n + 1);
    }
    return (
        <div className={"H2"}>
            我是儿子：{n}
            <hr/>
            <button onClick={add}>+1</button>
        </div>);
}