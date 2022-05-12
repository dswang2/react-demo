import React, { useReducer } from "react";

// 使用reducer第1步，创建初始值
const initdata = {n: 0};

// 使用reducer第2步，创建所有的操作reducer,接收数据，和对数据的操作信息
const reducer = (state, action) => {
    if (action.type === 'add') {
        return {n: state.n + action.number};
    } else if (action.type === 'multi') {
        return {n: state.n * action.number}
    } else {
        throw new Error("unknow type");
    }
}

const AppUseReducerDemo = (props) => {
    // 使用reducer第3步，调用React.useReducer，得到读写api
    const [state, dispatch] = useReducer(reducer, initdata);
    const {n} = state;
    const add = () => {
        // 使用reducer第4步，调用useReducer返回的写api，并传入操作信息
        dispatch({type: "add", number: 1});
    }
    const multi = () => {
        dispatch({type: "multi", number: 2})
    }
    return (
        <>
            <div>n:{n}</div>
            <div>
                <button onClick={add}> +</button>
            </div>
            <div>
                <button onClick={multi}> *</button>
            </div>
        </>
    );
}

export default AppUseReducerDemo;