import React from 'react';
import ReactDOM from 'react-dom';

const root = document.getElementById('root');
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
ReactDOM.render(APP(), root);