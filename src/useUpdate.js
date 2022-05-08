// 内部数据n变化，让n计数器发生变化
import React from "react";

const useUpdate = (fn, n) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(count => count + 1);
    }, [n]);
    React.useEffect(() => {
        if(count > 1){
            fn();
        }
    }, [count, fn]);
};

export default useUpdate;