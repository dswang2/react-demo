// 内部数据n变化，让n计数器发生变化
import React from "react";

const useUpdate = (fn, data) => {
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(nUpdateCount => nUpdateCount + 1);
    }, [data]);
    React.useEffect(() => {
        if(count > 1){
            fn();
        }
    },[count]);
};

export default useUpdate;