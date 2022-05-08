import React from "react";
import "./style.css"

const AppFuComponentDemo = (props) => {
    return (
        <div className="AppFuComponentDemo" >
            <ClassComponentAdd n={10}/>
            {props.message}
            <FnSon message="父亲传给儿子的数据"/>
        </div>
    );
}

const FnSon = props => {
    const [n, setN] = React.useState(true);
    return (<div className="FnSon">
        {/*让FunctionComponentAdd显示完整生命周期方法*/}
        <button onClick={()=>{setN(!n)}}>{props.message}</button>
        {n && <FunctionComponentAdd n={100}/>}
        <FnGrandSon message="儿子传给孙子的数据"/>
    </div>)
};

const FnGrandSon = function (props) {
    return (
        <div className={"FnGrandSon"}>{props.message}</div>
    );
}

class ClassComponentAdd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {n: props.n};
    }
    onclick = () => {
        this.setState((state) => {
            return {n: state.n +1}
        })
    };
    render() {
        return (
            <div>
                {this.state.n}
                <button onClick={this.onclick}>+1</button>
            </div>
        )
    }
}
// 内部数据n变化，让n计数器发生变化
const useUpdate = (fn, data) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(nUpdateCount => nUpdateCount + 1);
    }, [data]);
    React.useEffect(() => {
        if(count > 1){
            fn();
        }
    },[count]);
};

const FunctionComponentAdd = (props) => {
    const [n, setN] = React.useState(props.n);
    React.useEffect(() => {
        console.log("模拟类组件生命周期方法 onComponentDidMount 1");
    },[]);
    React.useEffect(()=>{
        console.log("模拟类组件生命周期方法 onComponentDidUpdate，任意属性变更");
    })
    React.useEffect(() => {
        console.log("模拟生命周期方法 onComponentDidUpdate，属性n变更");
    }, [n]);
    useUpdate(() => {
        console.log("内部数据n更新了");
    },n);
    React.useEffect(() => {
        console.log("模拟生命周期方法 onComponentDidMount 2，第一次渲染");
        return () => {
            console.log("模拟生命周期方法 onComponentWilUnMount");
        };
    })
    const onclick = () => {
        setN(n+1);
    };
    return (
        <div>{n}
            <button onClick={onclick}>{"+1"}</button>
        </div>
    );
}



export default AppFuComponentDemo;