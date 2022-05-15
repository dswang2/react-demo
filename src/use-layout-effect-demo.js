import React, { useEffect, useLayoutEffect, useState } from "react";

export default (props) => {
    const [value, setValue] = useState(0);
    // 在dom生成之后，浏览器完全渲染之前执行
    useLayoutEffect(() => {
        document.querySelector('#code').innerHTML = 'value: 1000';
    },[value]);
    // 在浏览器完全渲染之后执行
    useEffect(() => {
        document.querySelector('#code').innerHTML = 'value: dswang';
    }, [value]);
    return (
        <div id="code" onClick={() => {
            setValue(value => value + 1)
        }}>
            value: {value}
        </div>
    )
}
