import React, { useReducer } from "react";

const initFormData = {
    name: "",
    age: "",
    nationality: "",
}

const reducer = (state, action) => {
    switch (action.type) {
        case "patch":
            return {...state, ...action.formData};
        case "reset":
            return initFormData;
        default:
            throw new Error();
    }
}

const AppFormReducerDemo = (props) => {
    const [formData, dispatch] = useReducer(reducer, initFormData);
    const onSubmit = () => {
        console.log("submit");
    };
    const onReset = () => {
        console.log("reset");
        dispatch({type: "reset"});
    };
    return (
        <form onSubmit={onSubmit} onReset={onReset}>
            <div>
                姓名：
                <label>
                    <input value={formData.name} type="text" onChange={(e) => {
                        dispatch({type: "patch", formData: {name: e.target.value}})
                    }}/>
                </label>
            </div>
            <div>
                年龄：
                <label>
                    <input value={formData.age} type="text" onChange={(e) => {
                        dispatch({type: "patch", formData: {age: e.target.value}})
                    }}/>
                </label>
            </div>
            <div>
                民族：
                <label>
                    <input value={formData.nationality} type="text" onChange={(e) => {
                        dispatch({type: "patch", formData: {nationality: e.target.value}})
                    }}/>
                </label>
            </div>
            <div>
                <button type="submit">提交</button>
                <button type="reset">重置</button>
            </div>
            <hr/>
            {JSON.stringify(formData)}
        </form>
    )
}

export default AppFormReducerDemo