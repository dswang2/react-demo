import React, { useEffect, useRef, useState } from "react";

export default (props) => {
    const count = useRef(0); // count值的变化不会触发重新渲染
    useEffect(() => {
        count.current += 1; // 渲染完之后执行
    });
    console.log("count", count);
    const [n, setN] = useState(0);
    const onclick = () => {
        setN(n => n + 1);
    }
    return (
        <div className="H1">
            <button onClick={onclick}>++</button>
            <div>数据n={n}</div></div>
    );
}