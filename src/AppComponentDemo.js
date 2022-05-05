import React from "react";
import "./style.css"

const AppComponentDemo = () => {
    return (
        <div className="App2">
            <div>爸爸</div>
            <Son messageForSon="儿子你好"/>
        </div>
    );
};

class Son extends React.Component {
    constructor() {
        super();
        this.state = {n: 0,m:0}
    }

    add() {
        this.setState(state => {
            const n = state.n + 1;
            return {n};
        }); // 修改内部数据
    }
    // 推荐写法
    addm = () => {
        this.setState(state => {
            const m = state.m + 1;
            return {m};
        }); // 修改内部数据
    }

    render() {
        return (
            <div className="Son">
                儿子n:{this.state.n}
                我爸爸对我说{this.props.messageForSon}
                <button onClick={() => this.add()}>+1</button>{/*注意事件函数的写法*/}
                儿子m:{this.state.m}
                {/*<button onClick={() => this.addm()}>+1</button>*/}
                <button onClick={this.addm}>+1</button> {/*注意事件函数的写法*/}
                <Grandson messageForGrandson="孙子你好"/>
            </div>
        )
    }
}

const Grandson = (props) => {
    const [n, setN] = React.useState(0); // 内部数据n
    const [m, setM] = React.useState(0); // 内部数据m
    return (
        <div className="Grandson">
            孙子n:{n}我是孙子，我爸对我说 {props.messageForGrandson}
            <button onClick={() => setN(n + 1)}>+1</button>
        </div>
    );
};

// const App2 = styled.div`// styled
//   & {
//     background: red;
//   }
// `;
//
// const Son = styled.div`// styled
//   & {
//     background: greenyellow;
//   }
// `;
//
// const Grandson = styled.div`// styled
//   & {
//     background: blue;
//   }
// `;


// const Component = (props) => {
//     const array = []
//     for (let i = 0; i < props.numbers.length; i++) {
//         array.push(<div> {i}--
//             {props.numbers[i]}</div>)
//     }
//     return <div>{array}</div>
// }
//
class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {n: 0};
    }

    render() {
        return <div>
            <div>内部数据{this.state.n}</div>
            <div>外部数据{this.props.name}</div>
            <button onClick={this.add}>确定</button>
        </div>
    }

    add = ()=> {
        this.setState(state => {
            const n = state.n + 1;
            return {...state, n};
        }); // 修改内部数据
    }
}

new Welcome();
<Welcome name="dswang"/>

export default AppComponentDemo;
