import React, { useCallback, useMemo, useState } from "react";

export default (props) => {
    const [n, setN] = useState(1);
    const [m, setM] = useState(100);
    // useMemo 第一个参数是一个函数，返回值就是我们要缓存的数据或者函数
    // ▲▲▲▲▲ 使用useMemo，函数地址不会发生变化，否则，函数地址变化，也会导致MemoChild的刷新
    const onChildClick = useMemo(() => {
        return () => {
            console.log(`数据m：${m}发生变化了`)
        };
    }, [m])
    // useMemo的语法糖
    const onChildClick2 = useCallback(() => {
        console.log(`数据m：${m}发生变化了`)
    }, [m])
    const onclick = () => {
        // setN(n+1);
        // setN(n => n + 2);
        setN((n) => {
            return n * 2;
        })
    }
    return (
        <div className={"H1"}>
            <button onClick={onclick}>爸爸++</button>
            <span> {n}</span>
            <hr/>
            <Child data={m}/>
            <MemoChild data={m} onClick={onChildClick}/> {/*m没有变化时，MemoChild不渲染*/}
        </div>
    );
}

const Child = (props) => {
    console.log("数据n更新时，Child重新渲染");
    return (
        <div className="H2">儿子：{props.data}</div>
    );
}

const MemoChild = React.memo((props) => {
    console.log("数据n更新时，MemoChild不重新渲染");
    return (
        <div className="H2" onClick={props.onClick}>M.儿子：{props.data}</div>
    );
});