import React, { useEffect, useState } from "react";
import "./style.css"
import useUpdate from "./useUpdate";

const AppFuComponentDemo = (props) => {
    return (
        <div className="AppFuComponentDemo">
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
        <button onClick={() => {
            setN(!n)
        }}>{props.message}</button>
        {n && <FunctionComponentAdd n={100}/>}
        <FnGrandSon message="儿子传给孙子的数据"/>
    </div>)
};

const FnGrandSon = function (props) {
    const [user, setUser] = React.useState({name: "dsw", age: 66});
    const onAgeChange = () => {
        setUser({...user, age: Number(user.age) + 1});
        console.log(user);
    }
    return (
        <>
            <div className={"FnGrandSon"}>{props.message}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <button onClick={onAgeChange}>年龄++</button>
        </>
    );
}

class ClassComponentAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {n: props.n};
    }

    onclick = () => {
        this.setState((state) => {
            return {n: state.n + 1}
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

const FunctionComponentAdd = (props) => {
    const [n, setN] = useState(props.n);
    useEffect(() => {
        console.log("模拟类组件生命周期方法 componentDidMount");
        return () => {
            console.log("模拟生命周期方法 componentWilUnMount");
        }
    }, []); // 数组内的变量变化时执行，包含第一次得到值的时候，如果数组为空，就只第一次执行
    useEffect(() => {
        console.log("模拟类组件生命周期方法 componentDidUpdate，任意属性变更");
    })
    useEffect(() => {
        console.log("模拟生命周期方法 componentDidUpdate，属性n变更");
    }, [n]);
    // 自定义hook
    useUpdate(() => {
        console.log("内部数据n更新了");
    }, n);
    const onclick = () => {
        setN(n + 1);
    };
    return (
        <div>{n}
            <button onClick={onclick}>{"+1"}</button>
        </div>
    );
}


export default AppFuComponentDemo;