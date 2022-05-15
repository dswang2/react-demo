import React from "react";

const AppReducerForRedux = (props) => {
    return (
        <div>
            <Users/>
            <hr/>
            <Books/>
            <Movies/>
        </div>
    )

}

const Users = (props) => {
    return (
        <div>个人信息</div>
    )
};
const Books = (props) => {
    return (
        <div>我的书籍</div>
    )
};
const Movies = (props) => {
    return (
        <div>我的电影</div>
    )
};


export default AppReducerForRedux