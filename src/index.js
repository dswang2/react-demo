import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from "react-dom/client";
import AppModule from "./App"
import AppComponentDemo from "./AppComponentDemo";
import AppLifeDemo from "./AppLifeDemo";
// import App from "./AppFuComponentDemo"
import AppHooksDemo from "./AppHooksDemo";
import AppUseReducerDemo from "./AppUseReducerDemo";
import AppFormReducerDemo from "./AppFormReducerDemo";
// import AppReducerForRedux from "./reducer-for-redux/AppReducerForRedux";
// import App from "./use-context-demo/use-context-demo";
// import App from "./use-layout-effect-demo"
// import App from "./use-memo-demo"
import App from "./use-ref-demo"


const root = document.getElementById('root');
// ReactDOM.render(<AppComponentDemo />, root)
// ReactDOM.render(<AppLifeDemo />, root)
// ReactDOM.render(<AppFuComponentDemo message="测试" />, root)
// ReactDOM.render(<AppHooksDemo/>, root)
// ReactDOM.render(<AppUseReducerDemo/>, root)
// ReactDOM.render(<AppFormReducerDemo/>, root)
// ReactDOM.render(<AppReducerForRedux/>, root)
// ReactDOM.render(<App/>, root) // 这是React17的用法
createRoot(root).render(<App/>);  // 这是React18的用法

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