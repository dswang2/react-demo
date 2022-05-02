import React from "react";

const App = () => {
    return (
        <Component numbers={[1, 2, 3]}/>
    );
};

const Component = (props) => {
    const array = []
    for (let i = 0; i < props.numbers.length; i++) {
        array.push(<div> {i}--
            {props.numbers[i]}</div>)
    }
    return <div>{array}</div>
}

export default App;
