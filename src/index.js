import React from 'react';
import ReactDOM from 'react-dom';
import AppModule from "./App"
import AppComponentDemo from "./AppComponentDemo";
import AppLifeDemo from "./AppLifeDemo";
import AppFuComponentDemo from "./AppFuComponentDemo"
import AppHooksDemo from "./AppHooksDemo";
import AppUseReducerDemo from "./AppUseReducerDemo";
import AppFormReducerDemo from "./AppFormReducerDemo";
// import AppReducerForRedux from "./reducer-for-redux/AppReducerForRedux";
import App from "./use-context-demo/use-context-demo";

const root = document.getElementById('root');
// ReactDOM.render(<AppComponentDemo />, root)
// ReactDOM.render(<AppLifeDemo />, root)
// ReactDOM.render(<AppFuComponentDemo message="测试" />, root)
// ReactDOM.render(<AppHooksDemo/>, root)
// ReactDOM.render(<AppUseReducerDemo/>, root)
// ReactDOM.render(<AppFormReducerDemo/>, root)
// ReactDOM.render(<AppReducerForRedux/>, root)
ReactDOM.render(<App/>, root)

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