import React from "react";

const AppHooksDemo = (props) => {
    const [user, setUser] = React.useState({name: "dsw", age: 66});
    // const [user, setUser] = React.useState(() => ({name: "dsw", age: 66})); // useState可以接收函数
    const onAgeChange = () => {
        // 不可以局部更新,地址必须改变
        setUser(()=>{
            return {...user, age: Number(user.age) + 1};
        });
        setUser(()=>{
            return {...user, age: Number(user.age) + 1};
        });
        console.log(user);
    }
    const onNameChange = () => {
        user.name = "xyz"; // 错误的，地址不变
        // setUser({...user, name: "xyz"}); // 地址必须改变
    }
    return (
        <>
            <div className={"FnGrandSon"}>{props.message}</div>
            <div>{user.name}</div>
            <div>{user.age}</div>
            <button onClick={onAgeChange}>年龄++</button>
            <button onClick={onNameChange}>Name变化</button>
        </>
    );
}

export default AppHooksDemo;