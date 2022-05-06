import React from "react";

class AppLifeDemo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {n: 1, array: [1,2,3]}
        this.hiRef = React.createRef();
    }

    onClick = () => {
        this.setState((state) => {
            const {n} = this.state;
            const newN = n > 10 ? n : n + 1;
            this.setState({n: newN})
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() {
    }

    componentDidMount() {
        const div = document.getElementById("hello");
        const width = div.getBoundingClientRect().width;
        this.setState((state) => {
            return {width}
        })
        let hiWidth = this.hiRef.current.getBoundingClientRect().width;
        this.setState((state) =>{
            return {hiWidth};
        })
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
    }


    render() {
        const {n,array, width, hiWidth} = this.state;
        return (
            <>
                <div id="hello">hello: {width}</div>
                <div ref={this.hiRef}>hireact: {hiWidth}</div>
                <div>
                    {n % 2 ? <div>奇数</div> : <div>偶数</div>}
                    <div>{n}</div>
                    <button onClick={this.onClick}>+1</button>
                    {array.map((item)=>{
                        return <div key={item}>{item}</div>
                    })}
                </div>
            </>
        );
    }
}

export default AppLifeDemo;