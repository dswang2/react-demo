import React from 'react';
import ReactDOM from 'react-dom';
import AppModule from "./App"
import AppComponentDemo from "./AppComponentDemo";
import AppLifeDemo from "./AppLifeDemo";

const root = document.getElementById('root');
// ReactDOM.render(<AppComponentDemo />, root)
ReactDOM.render(<AppLifeDemo />, root)

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