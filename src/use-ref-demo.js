import React, { useEffect, useRef, useState } from "react";

export default (props) => {
    const count = useRef(0); // count值的变化不会触发重新渲染
    // useEffect(() => {
    //     count.current += 1; // 渲染完之后执行
    // });
    const [_,set_] = React.useState(null)
    const [n, setN] = useState(0);
    const onclick = () => {
        setN(n => n + 1);
    }
    const onclick2 = () => {
        count.current += 1; // count的值不会自动刷新
        set_(Math.random());
    }
    return (
        <div className="H1">
            <button onClick={onclick}>n++</button>
            <div>数据n:{n}</div>
            <button onClick={onclick2}>count++</button>
            <div>数据count:{count.current}</div>
        </div>
    );
}