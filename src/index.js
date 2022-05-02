import React from 'react';
import ReactDOM from 'react-dom';
import AppModule from "./App"

const root = document.getElementById('root');
ReactDOM.render(<AppModule />, root)

let n = 100;
const APP = () => React.createElement("div", {className: "red"},
    [n,
        React.createElement("button", {
            onClick: () => {
                n += 1;
                ReactDOM.render(APP(), root);
            }
        }, "+1")
    ]);
// ReactDOM.render(APP(), root);